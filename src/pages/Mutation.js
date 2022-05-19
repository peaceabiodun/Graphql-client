//this is not directly related to the rick and morty app, this is just for practicing  how mutation will be.

import { gql, useMutation } from "@apollo/client";

const CREATE_PRODUCT =gql`
mutation CreateProduct($name: String!, $quantityPerUnit: Int!){
    createProduct(record: {
        name: $$name,
        quantityPerUnit: $$quantityPerUnit,
    }){
        record{
            name
        }
    }
}
`;
export const Mutation = () => {
    const [createProduct, {error, loading, data}] = useMutation(CREATE_PRODUCT, {
        variables: {
            name: "hotdog",
            quantityPerUnit: 4,
        }
    })

    return ( 
        <div>
            <button onClick={() => createProduct ()}></button>
        </div>
     );
}

 
export default Mutation;