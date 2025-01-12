const Card = ({ image, price, description, address }) => {
  return (
    <div className="w-60 h-64 border border-gray-200 rounded-lg 
                    shadow-md bg-white hover:scale-105 transform 
                    transition-transform duration-300">
      <img
        className="w-full h-28 object-cover rounded-t-lg"
        src={image}
        alt="Property"
      />
      <div className="p-2">
        <h3 className="text-sm font-semibold text-gray-800">{price}</h3>
        <p className="text-xs text-gray-600 mt-1">{description}</p>
        <p className="text-xs text-gray-500 mt-1">{address}</p>
      </div>
    </div>
  );
};

export default Card;
