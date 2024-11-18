<script lang="ts">
  import { Motion, useMotionTemplate, useMotionValue } from "svelte-motion";

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  let background = useMotionTemplate`
    radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(38, 38, 38, 0.4), transparent 80%)
  `;

  interface Props {
    title: string;
    subtitle: string;
    description: string;
    href?: string;
  }

  const { title, subtitle, description, href }: Props = $props();
</script>

<a {href}>
  <div
    onmousemove={(e) => {
      const { left, top } = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    }}
    class="group relative w-full overflow-hidden rounded-2xl bg-background/40 md:mx-0"
    role="region"
    aria-roledescription="card"
  >
    <Motion style={{ background }} let:motion>
      <div
        use:motion
        class="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
      ></div>
    </Motion>
    <div
      class="relative flex flex-col rounded-2xl border border-transparent px-4 py-4 md:px-8 md:py-8"
    >
      <h3 class="mb-0">{title}</h3>
      <h4>{subtitle}</h4>
      <p>
        {description}
      </p>
    </div>
  </div>
</a>
