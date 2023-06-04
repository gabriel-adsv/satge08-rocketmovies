import { Container, Content } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'
import { Rating } from '../../components/Rating'
import { Link } from 'react-router-dom'

import { RiArrowLeftLine } from 'react-icons/ri'
import { FaRegClock } from 'react-icons/fa'

export function Preview() {
  return (
    <Container>
      <Header />
      <main>
        <Link to="/">
          <ButtonText icon={RiArrowLeftLine} title="Voltar"></ButtonText>
        </Link>
        <Content>
          <div className="title">
            <h1>Nome do Filme</h1>
            <div className="stars-content">
              <Rating></Rating>
            </div>
          </div>
          <div className="autor-container">
            <Link to="/profile">
              <img src="https://github.com/gabriel-adsv.png" alt="User Image" />
            </Link>
            <p>Por Gabriel Augusto</p>
            <FaRegClock />
            <p>04/06/23 às 17:16</p>
          </div>
          <div className="tags-container">
            <Tag title="teste"></Tag>
            <Tag title="teste"></Tag>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati earum porro accusantium necessitatibus officia cupiditate neque doloribus minus commodi, deserunt ab quibusdam inventore explicabo ratione minima soluta iusto aperiam voluptatem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, harum, aut inventore fuga rem dolorum quas molestiae quibusdam amet veniam, quae nostrum sed. Nesciunt dolorum eum aspernatur qui illum cum.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus odit asperiores dignissimos eius odio, deserunt non temporibus sed accusantium vel quod officiis repellat quos facere. Nostrum voluptatem eos assumenda ipsam?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem iste at tenetur nemo provident deserunt reiciendis ipsam similique, cupiditate consequuntur repudiandae beatae non esse, mollitia error dolorem alias libero. Aut?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore consequatur eum libero quisquam, nulla perferendis reiciendis velit itaque deserunt asperiores, blanditiis facilis quod tempora aliquam ipsum deleniti eius placeat debitis.
          </p>
        </Content>
      </main>
    </Container>
  )
}
