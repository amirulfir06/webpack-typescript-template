class YJRTable extends HTMLElement {
  constructor() {
    super()
    
    const shadow = this.attachShadow({ mode: 'open' });

    const link = document.createElement('link')
    link.rel = 'stylesheet';
    link.href = './css/yjr-table.css'

    const container = document.createElement('div')
    container.setAttribute('container',  '')
    
    
    this.shadowRoot?.append(link)
    this.shadowRoot?.append(container)
    
  }

  connectedCallback() {
    const username = this.getAttribute('username') || 'Guest'

    const container = this.shadowRoot?.querySelector('[container]')
    if(!container) return
    
    container.innerHTML = `
    
      <div class="card">
        <h3>Hello, ${username}!</h3>
      </div>
    `
  }
}

// Register the element. The name MUST contain a hyphen (-).
customElements.define('yjr-table', YJRTable);
