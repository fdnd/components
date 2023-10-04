<script>
  export let type = 'information';
</script>

<section class={type}>
  <span>Information<span>🔍</span></span>
  <span>♥</span>
  <span><span>to be</span> free</span>
  <span>@</span>
  <span>frontend</span>
  <span>design</span>
  <span>&</span>
  <span>development</span>
</section>

<style>
  section {
  display: flex;
  flex-flow: row-reverse wrap-reverse;
  justify-content: flex-end;
  align-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
}
section > span {
  display: block;
  text-align: center;
  white-space: nowrap;
  padding: 0 1.2rem;
  line-height: 3.4rem;
  font-size: 1.3rem;

  border-style: solid;
  border-width: 1px;
  border-radius: var(--pilled);
}

/* Information ♥ to be free @ fd&d */
.information > span:nth-of-type(1) {
  border-radius: var(--rounded);
  order: 8;
  background: var(--color-purple);
  color: var(--color-blue);
}
.information > span:nth-of-type(1) span {
  display: inline-block;
  margin-left: 2rem;
}
.information > span:nth-of-type(2) {
  width: 3.5rem;
  font-size: 2.5rem;
  padding: 0;
  order: 7;
  background: var(--color-green);
  color: var(--color-blue);
}
.information > span:nth-of-type(3) {
  display: flex;
  justify-content: space-between;
  width: 11rem;
  order: 6;
  background: var(--color-white);
  color: var(--color-blue);
}
.information > span:nth-of-type(3) span {
  margin-top: 0.15rem;
  margin-left: -1rem;
  height: 3rem;
  line-height: 3rem;
  padding: 0 1rem;
  border-radius: var(--pilled);
  background: var(--color-blue);
  color: var(--color-white);
}
.information > span:nth-of-type(4) {
  border-radius: 0;
  order: 5;
  background: var(--color-green);
  color: var(--color-blue);
}
.information > span:nth-of-type(5) {
  flex-grow: 3;
  order: 4;
  background: var(--color-blue);
  color: var(--color-purple);
}
.information > span:nth-of-type(6) {
  flex-grow: 3;
  width: 12rem;
  order: 3;
  background: var(--color-purple);
  color: var(--color-blue);
}
.information > span:nth-of-type(7) {
  order: 2;
}
.information > span:nth-of-type(8) {
  flex-grow: 5;
  order: 1;
  background: var(--color-green);
  color: var(--color-blue);
}
</style>