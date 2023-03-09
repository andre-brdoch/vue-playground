import { CreateElement, VNode } from 'vue'
import styles from './RenderTemplate.module.css'

export interface RenderTemplateProps {
  name: string
  age?: number
  onClick: () => void
}

export default function render(
  h: CreateElement,
  props: RenderTemplateProps
): VNode {
  const { name, age, onClick } = props
  return (
    <div>
      <h2>Template</h2>

      <article class={styles.cart}>
        <p>
          <b>Name:</b> {name}
        </p>

        {age !== undefined && (
          <p data-testid="age">
            <b>Age:</b> {age}
          </p>
        )}

        <button onClick={onClick}>Click</button>
      </article>
    </div>
  )
}
