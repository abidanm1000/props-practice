import './App.css';
import Header from './components/Header';
import Post from './components/Post';



function App() {

  // let students = [
  //   {name: 'Lance'},
  //   {name: 'Abi'},
  //   {name: 'Sergio'}
  // ]
  // {students.map(student => <Welcome student={student.name}/>)}

  let blogPosts = [
    {
      title: "Apples Are Falling From the Sky!",
      paragraph: "There are dozens and dozens of apple types, some of which you likely see in your produce section often, and some you may not have heard of or ever seen. Depending on the apple variety and how bitter or sweet it is, you may want to use them in pies and baked goods or to complement a savory sauce or another dish. But beyond flavor, they can also add color and texture."
    },
    {
      title: "Bears Are Going Bezerk",
      paragraph: "Seeing a bear in the wild is a special treat for any visitor to a national park. While it is an exciting moment, it is important to remember that bears in national parks are wild and can be dangerous. Their behavior is sometimes unpredictable. Although rare, attacks on humans have occurred, inflicting serious injuries and death. Each bear and each experience is unique; there is no single strategy that will work in all situations and that guarantees safety. Most bear encounters end without injury. Following some basic guidelines may help to lessen the threat of danger. Your safety can depend on your ability to calm the bear."
    },
    {
      title: "Catapillars Are Making Friends with Local Cats",
      paragraph: "Full-grown caterpillar of the Black Swallowtail (other names: Eastern Black Swallowtail, American Swallowtail, Parsnip Swallowtail, Parsley Caterpillar, Celeryworm, and Caraway worm)"
    }
  
  ];

  return (
    <div className="App">
      <Header />
      {blogPosts.map(blog => <Post title={blog.title} paragraph={blog.paragraph}/>)}
    </div>
  );
}

export default App;
