import React from 'react';

import Navigation from '.';
import json from './test/data/large';

// [
//   {
//     title: 'Leaders',
//     slug: 'leaders',
//     navigationItems: [
//       {
//         title: 'Leaders',
//         slug: 'leaders',
//         navigationItems: [
//           {
//             id: 1,
//             title: 'Who should lead the world',
//             text: '',
//             slug: 'who-should-lead-the-world',
//           },
//           {
//             id: 2,
//             title: 'Into Africa',
//             text: '',
//             slug: 'into-africa',
//           },
//           {
//             id: 3,
//             title: 'Europe renegotiated',
//             text: '',
//             slug: 'europe-renegotiated',
//           },
//           {
//             id: 4,
//             title: 'The feminisation of business',
//             text: '',
//             slug: 'the-feminisation-of-business',
//           },
//           {
//             id: 5,
//             title: 'All change for the world economy',
//             text: '',
//             slug: 'all-change-for-the-world-economy',
//           },
//           {
//             id: 6,
//             title: 'Faster, higher, stronger: how to succeed at the Olympics',
//             text: '',
//             slug: 'faster-higher-stronger-how-to-succeed-at-the-olympics',
//             publishedOn: '2015-10-25T10:39:31.712Z',
//           },
//           {
//             id: 7,
//             title: 'Tech\'s year of the unicorn',
//             text: '',
//             slug: 'techs-year-of-the-unicorn',
//             publishedOn: '2015-10-25T10:39:31.712Z',
//           },
//           {
//             id: 8,
//             title: 'What the UN drugs summit should decide',
//             text: '',
//             slug: 'what-the-un-drugs-summit-should-decide',
//             publishedOn: '2015-10-25T10:39:31.712Z',
//           },
//           {
//             id: 9,
//             title: 'Big is beautiful',
//             text: '',
//             slug: 'big-is-beautiful',
//             publishedOn: '2015-10-25T10:39:31.712Z',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: 'World',
//     slug: 'world',
//     navigationItems: [
//       {
//         title: 'Britain',
//         slug: 'britain',
//         navigationItems: [
//           {
//             id: 10,
//             title: 'Coalition, the Sequel',
//             text: 'Hung Parliament',
//             slug: 'coalition-the-sequel',
//           },
//           {
//             id: 11,
//             title: 'After the referendum',
//             text: 'What happens next for Scotland',
//             slug: 'after-the-referendum',
//           },
//         ],
//       },
//     ],
//   }
//   ... etc ...
// ]
const navigationItems = json;
const focusCategorySlug = null;
const focusSubcategorySlug = null;
const activeCategorySlug = 'world';
const activeSubcategorySlug = 'africa';
const activeArticleId = 55;
export default (
  <Navigation
    navigationItems={navigationItems}
    focusCategorySlug={focusCategorySlug}
    focusSubcategorySlug={focusSubcategorySlug}
    activeCategorySlug={activeCategorySlug}
    activeSubcategorySlug={activeSubcategorySlug}
    activeArticleId={activeArticleId}
  />
);
