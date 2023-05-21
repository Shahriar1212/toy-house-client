

const MyToysRow = ({toy, handleDelete}) => {


    const { _id, img, name, available_quantity, seller_email, category_name, seller_name, toy_description, price, rating } = toy;

    
    
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt='toy-img' />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{seller_name}</div>
                    </div>
                </div>
            </td>
            <td>
                {category_name ? category_name : "not found"}
                <br />
                <span className="badge badge-ghost badge-sm">$ {price}</span>
            </td>
            <td>{available_quantity}</td>
            <th>
                <button className="btn btn-warning btn-outline btn-xs mr-2">Update</button>
                <button onClick={() => handleDelete(_id)} className="btn btn-error btn-outline btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default MyToysRow;