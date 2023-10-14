import { createSignal, createEffect } from 'solid-js'

import './Popup.css'

export const Popup = () => {
  const [count, setCount] = createSignal(0)
  const link = 'https://github.com/guocaoyi/create-chrome-ext'

  const minus = () => {
    if (count() > 0) setCount(count() - 1)
  }

  const add = () => setCount(count() + 1)

  createEffect(() => {
    chrome.storage.sync.get(['count'], (result) => {
      setCount(result.count || 0)
    })

    chrome.runtime.onMessage.addListener((request) => {
      if (request.type === 'COUNT') {
        setCount(request.count || 0)
      }
    })
  }, [])

  createEffect(() => {
    chrome.storage.sync.set({ count })
    chrome.runtime.sendMessage({ type: 'COUNT', count })
  }, [count])

  return (
    <main>
      <h3>Popup Page</h3>
      <div class="calc">
        <button onClick={minus} disabled={count() <= 0}>
          -
        </button>
        <label>{count()}</label>
        <button onClick={add}>+</button>
      </div>
      <a href={link} target="_blank">
        generated by create-chrome-ext
      </a>
    </main>
  )
}

export default Popup
