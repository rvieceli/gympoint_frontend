import { format, parseISO, formatDistanceToNow } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

export const formatDate = date => {
  return format(parseISO(date), "dd 'de' MMMM 'de' yyyy", {
    locale: pt,
  });
};

export const formatDistanceDateToNow = date => {
  return formatDistanceToNow(parseISO(date), {
    addSuffix: true,
    locale: pt,
  });
};

export const { format: formatCurrency } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
