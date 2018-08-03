import mandrill from 'mandrill-api/mandrill';

const mandrillClient =
  typeof window === 'undefined' ? null : new mandrill.Mandrill('86h--hf2NMPqcd6nIup7xQ');

export default mandrillClient;
