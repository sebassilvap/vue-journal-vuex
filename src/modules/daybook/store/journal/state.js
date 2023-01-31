//? TEMPLATE - store/state.js
// * el state es donde se está almacenando la información y es REACTIVO !!

//export default () => ({})

export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(), // 121343484546 basado en la fecha actual
      date: new Date().toDateString, // sat 23, julio
      text: 'Imperdiet proin fermentum leo vel orci porta non pulvinar. Habitant morbi tristique senectus et. Euismod lacinia at quis risus sed vulputate. Scelerisque varius morbi enim nunc faucibus. Ultricies mi quis hendrerit dolor magna. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Sed euismod nisi porta lorem mollis aliquam ut porttitor. Vitae auctor eu augue ut lectus arcu bibendum. Ultrices eros in cursus turpis massa tincidunt dui ut. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Vulputate eu scelerisque felis imperdiet proin.',
      picture: null, // https:// viene de un url
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString,
      text: 'Felis bibendum ut tristique et egestas quis. Nunc sed velit dignissim sodales ut eu sem. Enim tortor at auctor urna. Fusce id velit ut tortor pretium viverra suspendisse potenti. Et egestas quis ipsum suspendisse. A diam maecenas sed enim. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Malesuada fames ac turpis egestas integer eget. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Quam vulputate dignissim suspendisse in est ante in nibh. Sit amet purus gravida quis blandit turpis cursus in.',
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString,
      text: 'Purus in mollis nunc sed id semper risus in hendrerit. In eu mi bibendum neque. Sed libero enim sed faucibus turpis in eu mi bibendum. Orci dapibus ultrices in iaculis nunc sed augue. Lectus proin nibh nisl condimentum. Et netus et malesuada fames ac turpis egestas integer. Magna fringilla urna porttitor rhoncus dolor purus. Euismod elementum nisi quis eleifend quam adipiscing. Purus semper eget duis at tellus at urna. Tellus mauris a diam maecenas. Libero volutpat sed cras ornare.',
      picture: null,
    },
  ],
})
