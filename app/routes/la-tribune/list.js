import Route from '@ember/routing/route';

export default Route.extend({

  async model() {
    return [
      {
        id: 1,
        title: 'Title 1',
        postDatetime: '2019-02-01',
        updateDatetime: '2019-02-01',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare posuere urna, vel maximus massa tristique vel. Donec mollis, enim nec lacinia pretium, tellus justo ultrices tellus, at scelerisque est odio eu ex. Donec in blandit dui. Vestibulum sed elementum nisi, quis placerat arcu. In in quam sapien. Morbi ornare elementum magna, et finibus nisl ultrices porta. Sed sit amet ipsum nunc. Aenean sit amet laoreet ligula. Curabitur porttitor purus felis, id maximus tortor pharetra eu. Proin tincidunt, neque ac placerat hendrerit, magna nunc commodo mauris, at pulvinar ligula tellus nec risus. Cras rutrum mollis nibh, nec fringilla velit pretium quis. Nunc vehicula libero at consectetur congue.',
        thumbnailUrl: '../../images/bg-1.jpg',
        category: 1
      },
      {
        id: 2,
        title: 'Title 2',
        postDatetime: '2019-02-01',
        updateDatetime: '2019-02-01',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur faucibus metus, sed sodales nibh mattis et. Praesent ipsum risus, porttitor nec finibus a, accumsan vel turpis. In aliquet nulla dolor, a vehicula est dignissim et. Phasellus neque nisl, faucibus vel metus id, ultricies dignissim arcu. Etiam ',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare posuere urna, vel maximus massa tristique vel. Donec mollis, enim nec lacinia pretium, tellus justo ultrices tellus, at scelerisque est odio eu ex. Donec in blandit dui. Vestibulum sed elementum nisi, quis placerat arcu. In in quam sapien. Morbi ornare elementum magna, et finibus nisl ultrices porta.<br><br> Sed sit amet ipsum nunc. Aenean sit amet laoreet ligula. Curabitur porttitor purus felis, id maximus tortor pharetra eu. Proin tincidunt, neque ac placerat hendrerit, magna nunc commodo mauris, at pulvinar ligula tellus nec risus. Cras rutrum mollis nibh, nec fringilla velit pretium quis. Nunc vehicula libero at consectetur congue.',
        thumbnailUrl: '',
        category: 1,
        authors: [
          {
            id: 1,
            firstName: 'Bob',
            lastName: 'Marley',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            photo: '../../images/photoJordan.jpg'
          },
          {
            id: 2,
            firstName: 'Yolo',
            lastName: 'Style',
            desc: 'Fusce consectetur faucibus metus, sed sodales nibh mattis et. Praesent ipsum risus.',
            photo: '../../images/photoSamuel.jpg'
          }
        ]
      },
      {
        id: 3,
        title: 'Title 3',
        postDatetime: '2019-02-01',
        updateDatetime: '2019-02-01',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare posuere urna, vel maximus massa tristique vel.',
        thumbnailUrl: '../../images/bg-3.jpg',
        category: 1
      },
      {
        id: 4,
        title: 'Title 4',
        postDatetime: '2019-02-01',
        updateDatetime: '2019-02-01',
        desc: 'Une description 4',
        thumbnailUrl: '../../images/bg-4.jpg',
        category: 1
      },
      {
        id: 5,
        title: 'Title 5',
        postDatetime: '2019-02-01',
        updateDatetime: '2019-02-01',
        desc: 'Une description 5',
        thumbnailUrl: '../../images/bg-5.jpg',
        category: 1
      },
      {
        id: 5,
        title: 'Title 5',
        postDatetime: '2019-02-01',
        updateDatetime: '2019-02-01',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare posuere urna, vel maximus massa tristique vel.Fusce consectetur faucibus metus, sed sodales nibh mattis et. Praesent ipsum risus.',
        thumbnailUrl: '',
        category: 2
      },
      {
        id: 6,
        title: 'Title 6',
        postDatetime: '2019-02-01',
        updateDatetime: '2019-02-01',
        desc: 'Fusce consectetur faucibus metus, sed sodales nibh mattis et. Praesent ipsum risus.',
        thumbnailUrl: '',
        category: 3
      },
      {
        id: 8,
        title: 'Title 7',
        postDatetime: '2019-02-01',
        updateDatetime: '2019-02-01',
        desc: 'Fusce consectetur faucibus metus, sed sodales nibh mattis et.',
        thumbnailUrl: '',
        category: 4
      }];
  }
});

