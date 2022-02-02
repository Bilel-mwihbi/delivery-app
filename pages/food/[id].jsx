import ComponentsHandlePage from "../../components/ComponentsHandlePage";

const Food = ({obj}) => {
    const mystyle = {
      height: "100vh",
      display: "flex",
    };
   
    return ( 
    <div style={mystyle}>
       <ComponentsHandlePage obj={obj}/>
    </div> );
}
 
export const getServerSideProps = async ({params}) => {
  const res = await fetch(`http://localhost:3000/api/foods/${params.id}`);
  const data = await res.json();

  return {
    props: {
      obj: data,
    },
  };
}; 

export default Food;