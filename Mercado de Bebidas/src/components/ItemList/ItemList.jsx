import styles from '../ItemList/ItemList.module.css'
import Item from '../Item/Item'


const ItemList = ({products}) => {
    return(
        <div className={styles.container}>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList