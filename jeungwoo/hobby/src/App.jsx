import Header from './components/Header';
import HobbyCard from './components/HobbyCard';
import What from './components/What';

function App() {
  const Movies = [
    {id: 1, name: "가디언즈 오브 갤럭시", infor: "장르:SF,액션", word: "신나고 재밌고 멋지고 감동적!!"}
  ];

   const Musics = [
    {id: 1, name: "Virtual Insanity", infor: "자미로콰이/재즈 펑크,애시드 재즈", word: "진짜 가상의 광기"}
  ];

   const Books = [
    {id: 1, name: "회색 인간", infor: "작가:김동식/단편소설", word: "끊임없는 상상력"}
  ];
  return (
    <div>
      <Header/>

        <main>
          
          <div style={{ display:'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px'}}>
            <What title="영화 소개"/>
            {Movies.map((movie) => (
            <HobbyCard
            key={movie.id}
            name={movie.name}
            infor={movie.infor}
            word={movie.word}
            />
          ))}
          </div>

          <div style={{ display:'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px'}}>
            {Musics.map((music) => (
            <HobbyCard
            key={music.id}
            name={music.name}
            infor={music.infor}
            word={music.word}
            />
          ))}
          <What title="노래 소개"/>
          </div>

          <div style={{ display:'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px'}}>
            <What title="책 소개"/>
            {Books.map((book) => (
            <HobbyCard
            key={book.id}
            name={book.name}
            infor={book.infor}
            word={book.word}
            />
          ))}
          </div>
        </main>
    </div>
  );
  
}
export default App;