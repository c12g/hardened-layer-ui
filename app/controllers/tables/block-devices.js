import Ember from 'ember';
import EsTable from '../../mixins/es-table';

export default Ember.ArrayController.extend(EsTable, {
  esFilter: '',
  esFields: ['device', 'mountType', 'mountMode'],
  esSorter: ['device'],
});

