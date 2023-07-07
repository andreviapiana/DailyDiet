import { Container, FeedbackImage, StrongText, Subtitle, Title } from './styles'

import { Button } from '@components/Button'
import { useNavigation, useRoute } from '@react-navigation/native'
import goodFeedbackImg from '@assets/positive.png'
import badFeedbackImg from '@assets/negative.png'

type FeedbackProps = {
  inDiet: boolean
}

export function Feedback() {
  const navigation = useNavigation()

  function previousPage() {
    navigation.navigate('home')
  }

  const route = useRoute()

  const { inDiet } = route.params as FeedbackProps

  return (
    <Container>
      <Title inDiet={inDiet}>{inDiet ? 'Continue assim!' : 'Que pena!'}</Title>

      {inDiet ? (
        <Subtitle>
          Você continua <StrongText>dentro da dieta.</StrongText> Muito bem!
        </Subtitle>
      ) : (
        <Subtitle>
          Você <StrongText>saiu da dieta</StrongText> dessa vez, mas continue se
          esforçando e não desista!
        </Subtitle>
      )}
      <FeedbackImage source={inDiet ? goodFeedbackImg : badFeedbackImg} />
      <Button title="Ir para a página inicial" onPress={previousPage} />
    </Container>
  )
}
