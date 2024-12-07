export default ({ app }) => {
  return html`
  <${Grid} container spacing=${2}>
    <${Grid} item xs=${12}>
      <${ControlPanel} />
    </>
    <${Grid} item xs=${6}>
      <${PeersPanel} />
    </>
    <${Grid} item xs=${6}>
      <${UserPanel} />
    </>
  </>
`
}