// @flow

const sales = {
  development: '0xaee0eb707a23fee852c43b5eb22030a25a729937',
  production: '0xe2d7989f2d13f08515a3a3b6a02dee2f583c9fc5',
};

export const realm = '5a7483c1edc9630e89224331';
export const sale: string = sales[process.env.API] || sales.production;
export const contactEmail = 'future@gawooni.com';
export const termsOfServiceURL = 'terms.url';
