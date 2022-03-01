import imageLarge from "./assets/imageLarge.png";
import imageSmall from "./assets/imageSmall.png";

export const users = [
  { name: "User1", email: "User1@gallery.com", password: "Pass1234" },
  { name: "User2", email: "User2@gallery.com", password: "Pass4321" },
];

export const images = [
  {
    id: "asgksn-123-fdasd",
    title: "Nice image 1",
    user: "User 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    imageSmall,
    imageLarge,
    comments: [
      {
        id: "asdasd23-323fafdf",
        user: "User2",
        text: "Lorem ipsum dolor sit amet.",
      },
      {
        id: "as32123-323fafdf",
        user: "User2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      },
      { id: "asd6d5f23-323fafdf", user: "User1", text: "Thank you!" },
    ],
  },
  {
    id: "saasca-781-asfcavs",
    title: "Nice image 2",
    user: "User 1",
    description:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat.",
    imageSmall,
    imageLarge,
    comments: [
      { id: "asdakda-65sd23-323fafdf", user: "User2", text: "Amazing photo!" },
      { id: "asda656cas-sd23-323fafdf", user: "User1", text: "Thank you!" },
    ],
  },
  {
    id: "asdcea-253-kjhjb",
    title: "Nice image 3",
    user: "User 2",
    description:
      "Leugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretiums.",
    imageSmall,
    imageLarge,
    comments: [
      { id: "asdvd65-6521d23-323fafdf", user: "User1", text: "Amazing photo!" },
      {
        id: "sdas-casclas-12dasd23-323fafdf",
        user: "User2",
        text: "Thank you!",
      },
    ],
  },
  {
    id: "rwerfd-231-ssaca",
    title: "Nice image 4",
    user: "User 1",
    description:
      "Aeget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris.",
    imageSmall,
    imageLarge,
    comments: [
      {
        id: "asda565asc2a3s2dsd23-323fafdf",
        user: "User2",
        text: "Amazing photo!",
      },
      { id: "asdasd23-323f656323sadafdf", user: "User1", text: "Thank you!" },
    ],
  },
  {
    id: "iipovda-534-dfcers",
    title: "Nice image 5",
    user: "User 2",
    description:
      "In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu.",
    imageSmall,
    imageLarge,
    comments: [
      {
        id: "asdas56asd32yca-6da52c3d23-323fafdf",
        user: "User1",
        text: "Amazing photo!",
      },
      {
        id: "asdas65da6sd5-ac5as32d23-323fafdf",
        user: "User2",
        text: "Thank you!",
      },
    ],
  },
];
