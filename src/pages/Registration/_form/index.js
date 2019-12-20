import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { subDays, addMonths, parseISO } from 'date-fns';

import Form from '../../../components/Form';
import { Inline } from '../../../components/Inline';
import Input from '../../../components/Input';

import api from '../../../services/api';

import schema from './validation';

export default function _form({ data, onSubmit, title }) {
  const [startDate, setStartDate] = useState(null);
  const [plan, setPlan] = useState(null);
  const [plans, setPlans] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function load() {
      const responsePlans = await api.get(`/plans`);
      const responseStudents = await api.get(`/students`);

      setPlans(responsePlans.data.rows);
      setStudents(responseStudents.data.rows);
    }

    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const price = useMemo(() => {
    if (!plan) return 0;
    return plan.duration * plan.price;
  }, [plan]);

  useEffect(() => {
    if (data) {
      setPlan(plans.find(option => option.id === data.plan_id));
      setStartDate(parseISO(data.startDate));
    }
  }, [data, plans]);

  const endDate = useMemo(() => {
    if (!plan || !startDate) return null;

    return subDays(addMonths(startDate, plan.duration), 1);
  }, [plan, startDate]);

  return (
    <Form
      backUrl="/registrations"
      title={title}
      schema={schema}
      onSubmit={onSubmit}
      initialData={data}
    >
      {students.length > 0 && (
        <Input
          title="ALUNO"
          name="student_id"
          type="select"
          placeholder="Buscar Aluno"
          labelTitle="name"
          options={students}
        />
      )}
      <Inline>
        {plans.length > 0 && (
          <Input
            title="PLANO"
            name="plan_id"
            type="select"
            placeholder="Selecione o plano"
            options={plans}
            onChange={e => setPlan(e)}
          />
        )}
        <Input
          title="DATA DE INICÍO"
          name="startDate"
          type="date"
          placeholder="Escolha a data"
          onSelect={e => setStartDate(e)}
        />
        <Input
          title="DATA DE TÉRMINO"
          name="endDate"
          selected={endDate}
          type="date"
          disabled
        />
        <Input
          title="VALOR FINAL"
          name="price"
          type="number"
          scale={2}
          prefix="R$ "
          value={price}
          disabled
        />
      </Inline>
    </Form>
  );
}

_form.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
};

_form.defaultProps = {
  data: null,
};
