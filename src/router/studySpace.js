import AddStudySpace from '@/components/studySpace/Add';
import ListStudySpace from '@/components/studySpace/List';
import DetailStudySpace from '@/components/studySpace/Detail';
import EditStudySpace from '@/components/studySpace/Edit';

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
  {
    path: '/studySpace/edit/:studyRoomId',
    name: 'editStudySpace',
    component: EditStudySpace,
  }

]
