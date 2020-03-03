import Vue from 'vue'
import VeeValidate from 'vee-validate'
import * as rules from 'vee-validate/dist/rules';

Vue.use(VeeValidate)

Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});
  
localize('es', es);