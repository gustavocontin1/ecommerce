import ItemCount from "./ItemCount"
const ItemListContainer = ({greeting}) => {
return (
    <main>
        <div>
            <h3>{greeting}</h3>
            <ItemCount initial={1} stock={5} onAdd={() => {}}/>
        </div>
    </main>
)
}

export default ItemListContainer