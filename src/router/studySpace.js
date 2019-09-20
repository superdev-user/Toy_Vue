import AddStudySpace from '@/components/studySpace/Add';
import ListStudySpace from '@/components/studySpace/List';
import DetailStudySpace from '@/components/studySpace/Detail';

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
  {
    path: '/studySpace/:studyRoomId',
    name: 'detailStudySpace',
    component: DetailStudySpace,
  },

]
