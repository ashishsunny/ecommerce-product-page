import { BeatLoader } from "react-spinners";

const Loader = () => {
    
    const override =`
    display: block;
    margin: 0 auto;
     `;

return ( 
        <div className="loader">
            <BeatLoader color={'#007bff'} loading={true} css={override} size={15} />
        </div>
     );
}
 
export default Loader;