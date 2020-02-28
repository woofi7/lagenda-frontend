import Route from '@ember/routing/route';

export default Route.extend({

  async model() {
    return [{
      id: 1,
      name: 'La swagitude',
      articles: [
        {
          id: 1,
          title: 'Title 1',
          postDatetime: '2019-02-01',
          updateDatetime: '2019-02-01',
          desc: 'Une description',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare posuere urna, vel maximus massa tristique vel. Donec mollis, enim nec lacinia pretium, tellus justo ultrices tellus, at scelerisque est odio eu ex. Donec in blandit dui. Vestibulum sed elementum nisi, quis placerat arcu. In in quam sapien. Morbi ornare elementum magna, et finibus nisl ultrices porta. Sed sit amet ipsum nunc. Aenean sit amet laoreet ligula. Curabitur porttitor purus felis, id maximus tortor pharetra eu. Proin tincidunt, neque ac placerat hendrerit, magna nunc commodo mauris, at pulvinar ligula tellus nec risus. Cras rutrum mollis nibh, nec fringilla velit pretium quis. Nunc vehicula libero at consectetur congue.',
          thumbnailUrl: '../../images/bg-1.jpg',
          category: 1
        },
        {
          id: 2,
          title: 'Title 2',
          postDatetime: '2019-02-01',
          updateDatetime: '2019-02-01',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur faucibus metus, sed sodales nibh mattis et. Praesent ipsum risus, porttitor nec finibus a, accumsan vel turpis. In aliquet nulla dolor, a vehicula est dignissim et. Phasellus neque nisl, faucibus vel metus id, ultricies dignissim arcu. Etiam vehicula justo sed leo sagittis placerat. Sed diam urna, viverra quis pulvinar at, euismod at tellus.',
          content: '<b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tempor lacus. Quisque posuere est ac ligula laoreet cursus. Fusce posuere placerat ligula, at consectetur elit ullamcorper a. Fusce mollis metus arcu. Praesent vel magna et lorem tempor tristique. Integer a ligula ultrices, tempus elit ac, lobortis ante. Phasellus iaculis dignissim odio, quis blandit sapien elementum id. Etiam a purus metus. Sed consequat, urna sit amet faucibus fermentum, enim tortor porttitor leo, sed fermentum nunc neque et ipsum. Aliquam rhoncus massa tellus, a commodo metus vestibulum vel. Nam varius mollis arcu non ultrices. Etiam risus nisi, egestas sed imperdiet eget, dignissim sit amet ex.</b><br>\n' +
            '<br>\n' +
            'Nullam eu vulputate erat. Vivamus eleifend enim quis erat imperdiet suscipit. Duis elementum, ex sed molestie vestibulum, massa lorem tristique est, quis blandit sem urna at metus. Nunc gravida felis a leo sollicitudin, ac accumsan tortor tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut hendrerit lorem eros, porta imperdiet massa blandit imperdiet. Mauris pretium id lacus sit amet consequat. Nunc id ultrices nunc. Vivamus non augue at lorem accumsan maximus eget ac lectus. Integer rhoncus lectus sem, eget dapibus libero pellentesque in. Suspendisse non dolor sed odio condimentum euismod. Donec tincidunt fringilla tincidunt. Maecenas pulvinar lacinia enim sed hendrerit.<br>\n' +
            '<br>\n' +
            'Nullam dignissim, velit a maximus imperdiet, ex neque tristique est, at mattis sem ante vel magna. Vivamus nec lobortis tortor. Duis sit amet feugiat ex, nec blandit felis. Sed vestibulum elit sed velit tempor tincidunt. Etiam tincidunt orci in sodales vulputate. Pellentesque lacus tellus, placerat quis rhoncus a, auctor id nunc. Donec cursus condimentum magna nec mattis. In ut lectus nec eros aliquet vestibulum. Morbi varius lacus eget aliquam venenatis. Donec convallis nisi at ligula euismod imperdiet vel non velit. Quisque non malesuada sapien. Donec feugiat pretium erat, eu semper ante auctor nec. Mauris nec mauris felis.<br>\n' +
            '<br>\n' +
            'Nam tincidunt, nulla vel ultricies porttitor, dolor nunc consequat ex, at aliquam nibh mi ut arcu. Sed ornare facilisis elementum. Pellentesque molestie tincidunt nunc vitae rutrum. Integer quis quam arcu. Donec leo leo, suscipit sed quam nec, egestas accumsan urna. Fusce rhoncus euismod auctor. Duis cursus, tellus et eleifend vehicula, turpis erat maximus neque, in ultricies arcu dui id ex. Vivamus non diam vel ligula sagittis pellentesque. Maecenas suscipit cursus justo, pretium ullamcorper ante tempus vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;<br>\n' +
            '<br>\n' +
            'Nulla vitae velit in mi eleifend accumsan eu nec sem. Nunc tincidunt dolor quis lectus tempus vestibulum. In vulputate eget enim vel dapibus. Integer non iaculis nunc. Fusce fermentum viverra elit, ac feugiat ipsum consequat id. Donec tempus consectetur fringilla. Nullam in nibh id justo placerat facilisis vitae in enim. Morbi efficitur massa ligula, id feugiat odio iaculis suscipit. Aenean a molestie lectus. Sed sodales massa vel lorem cursus bibendum.<br>\n' +
            '<br>\n' +
            'Curabitur condimentum ipsum et porttitor mollis. Integer pulvinar, est sit amet pellentesque facilisis, metus ante imperdiet ipsum, sed condimentum tellus massa ac tellus. Maecenas pellentesque congue semper. Suspendisse consectetur suscipit ligula, eu posuere purus. Donec non ligula urna. Morbi tempor massa id ipsum laoreet, eget tempor mi tristique. In vestibulum tincidunt est, vel ultricies turpis. Proin auctor sed eros ac dapibus. Etiam dapibus lorem felis, vel volutpat enim tincidunt quis. Aenean convallis dolor ut vestibulum posuere.',
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
          desc: 'Une description 3',
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
        }
      ]
    },
    {
      id: 2,
      name: 'Le Karibou furieux',
      articles: [{
        id: 6,
        title: 'Title 5',
        postDatetime: '2019-02-01',
        updateDatetime: '2019-02-01',
        desc: 'Une description 5',
        thumbnailUrl: '',
        category: 2
      }]
    },
    {
      id: 3,
      name: 'Yolo inc. revient',
      articles: [{
        id: 7,
        title: 'Title 6',
        postDatetime: '2019-02-01',
        updateDatetime: '2019-02-01',
        desc: 'Une description 6',
        thumbnailUrl: '',
        category: 3
      }]
    },
    {
      id: 4,
      name: 'Héritage',
      articles: [{
        id: 8,
        title: 'Title 7',
        postDatetime: '2019-02-01',
        updateDatetime: '2019-02-01',
        desc: 'Une description 7',
        thumbnailUrl: '',
        category: 4
      }]
    }];
  }
});

