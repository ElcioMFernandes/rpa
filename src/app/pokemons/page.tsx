async function getData (){
  const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/");
  const results = await response.json();
  return results;
}

export default async function Pokemons() {

  const data = await getData();

  return (
    <div>
        <h1>Página de Pokemons</h1>
        <ul>
          {
            data ? 
            data.results.map((p: any) => (<li key={p.name}>{p.name}</li>))
            :
            <li>Carregando...</li>
          }
        </ul>
    </div>
  );
}
