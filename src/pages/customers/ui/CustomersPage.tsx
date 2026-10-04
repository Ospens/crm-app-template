import { Sidebar } from "../../../widgets/sidebar"
import { Header } from "../../../widgets/header"
import PlusIcon from "../../../assets/plus.svg"
import style from "./Customers.module.css"

const CustomersPage = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={style.header}>
            <h1>Customers</h1>
            <div style={{ display: "flex" }}>
              <button className={style["create-new"]}>Add New Customer<img src={PlusIcon} alt="" /></button>
              <Header />
            </div>
          </div>
          <div className={style.content} style={{ padding: "20px 24px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis porro sapiente aliquam iusto ipsam perferendis dolores asperiores vero sint consectetur earum sequi eum commodi odio, ipsa sunt similique molestias cum temporibus nobis enim aut consequuntur vel? Quod quas, sequi optio fugit vel perferendis in, dolorem animi voluptate molestiae hic praesentium porro harum magnam molestias quidem, accusamus velit explicabo. Vero fugit ipsum quisquam ab maiores odit voluptates minus consectetur! Ipsam ex odio quod debitis eos quam facilis, voluptatibus officia non consequatur esse, a repellat accusantium nesciunt nihil similique omnis ad deserunt porro sunt repellendus. Expedita molestiae explicabo enim nobis quibusdam mollitia.
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomersPage
