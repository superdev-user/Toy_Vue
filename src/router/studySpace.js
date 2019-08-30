import AddStudySpace from '@/components/studySpace/Add';
import ListStudySpace from '@/components/studySpace/List';

export default [
  {
    path: '/studySpace',
    name: 'addStudySpace',
    component: AddStudySpace,
  },

  {
    path: '/studySpaceList',
    name: 'listStudySpace',
    component: ListStudySpace,
  },

]
