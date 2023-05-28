const Card = (props) => {
  return (
    <div
      class="bg-white p-4 text-center"
      classList={ {'rounded-md': props.rounded, 'shadow-md': !props.flat} }
    >
      <h2>{ props.title }</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, vel
        iure? Velit id nam tenetur?
      </p>
      <button class="btn">click me!</button>
    </div>
  );
};

export default Card;
