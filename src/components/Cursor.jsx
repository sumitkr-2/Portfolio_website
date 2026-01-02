import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let visible = false;
    let idleTimeout;

    const show = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
      visible = true;
    };

    const hide = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      ring.classList.remove("idle");
      visible = false;
    };

    const onMove = (e) => {
      show();

      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;

      ring.classList.remove("idle");
      clearTimeout(idleTimeout);

      idleTimeout = setTimeout(() => {
        ring.classList.add("idle");
      }, 150);
    };

    document.addEventListener("mousemove", onMove);
    document.body.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) hide();
    });

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
      clearTimeout(idleTimeout);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" />
      <div className="cursor-ring" />
    </>
  );
}
