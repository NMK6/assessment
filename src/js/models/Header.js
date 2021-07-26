import logo from './../../img/assessment-logo.svg';
export const header = {
  title: ['assessment', 'accounting & finance'],
  menu: [
    { name: ['home', '/'], sub: [] },
    {
      name: ['services', '/services'],
      sub: [
        [
          'LLP / partnerships',
          'http://assessment.birdmarketing.co.uk/services/llp/',
        ],
        [
          'self employed',
          'http://assessment.birdmarketing.co.uk/services/self-employed/',
        ],
        [
          'sole trader',
          'http://assessment.birdmarketing.co.uk/services/162529-2/',
        ],
        [
          'limited company',
          'http://assessment.birdmarketing.co.uk/services/limited-company-accounts-for-companies-needing-accounts-in-essex-ltd-co/',
        ],
      ],
      subImage: logo,
    },
    {
      name: ['sectors', '/sectors'],
      sub: [
        [
          'recruitment',
          'http://assessment.birdmarketing.co.uk/sectors/recruitment/',
        ],
        ['law / legal', 'http://assessment.birdmarketing.co.uk/sectors/law/'],
        [
          'ecommerce',
          'http://assessment.birdmarketing.co.uk/sectors/ecommerce/',
        ],
        ['IT / telecoms', 'http://assessment.birdmarketing.co.uk/sectors/it/'],
        [
          'construction',
          'http://assessment.birdmarketing.co.uk/sectors/construction/',
        ],
        ['property', 'http://assessment.birdmarketing.co.uk/sectors/property/'],
        ['automative', 'http://assessment.birdmarketing.co.uk/Automotive'],
      ],
    },
    { name: ['contact', '/contact'], sub: [] },
  ],
  mylogo: [logo, '/'],
  logoIds: [],
  colors: [],
  buttons: { phone: ['0208 123 4567'], email: ['info@example.com'] },
};
