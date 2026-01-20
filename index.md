---
# https://vitepress.dev/reference/default-theme-home-page
# layout: home (Disabled to show sidebar)
---

<div class="intro-section">
  <h1>RAGERES DOCS</h1>
  <p class="subtitle">Official Documentation & Resources</p>
  <p class="desc">เอกสารประกอบการใช้สคริปต์และทรัพยากรของทางเรา</p>
</div>

## Scripts & Resources

<div class="resource-grid">
  <div class="resource-card-wrapper">
    <a href="/docs/party-farm" class="resource-card">
      <div class="card-content">
        <h3>Party Farm</h3>
        <p>ระบบปาร์ตี้ฟาร์มเก็บไอเทมกับเพื่อน ๆ ช่วยกันเก็บไว ได้ของชัวร์! รองรับระบบ VIP และการตั้งค่าที่หลากหลาย</p>
      </div>
      <div class="card-footer">
        <span class="read-more">View Guide <span class="arrow">→</span></span>
      </div>
    </a>
  </div>

  <!-- Future cards can be added here -->

</div>

<style>
/* FORCE FULL WIDTH */
.VPDoc .container {
  max-width: none !important;
  padding: 0 24px !important;
  margin: 0 !important;
  width: 100% !important;
}

@media (min-width: 960px) {
  .VPDoc .container {
    padding: 0 32px !important;
  }
}

.VPDoc .content-container {
  max-width: none !important;
}

/* Header Styles */
.intro-section {
  padding: 3rem 0 2rem;
  text-align: center;
  border-bottom: 1px solid var(--vp-c-divider);
  margin-bottom: 2rem;
}
.intro-section h1 {
  background: -webkit-linear-gradient(120deg, #ff3333 30%, #ff0000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  letter-spacing: -1px;
}
.intro-section .subtitle {
  font-size: 1.8rem;
  color: var(--vp-c-text-1);
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.intro-section .desc {
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
  margin-top: 0.5rem;
}

/* Grid Styles */
.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

/* Card Styles */
.resource-card {
  border: 1px solid var(--vp-c-bg-soft);
  background-color: var(--vp-c-bg-soft);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease-in-out;
  text-decoration: none !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.resource-card h3 {
  margin: 0 0 0.8rem 0 !important;
  color: var(--vp-c-text-1);
  font-size: 1.4rem;
  font-weight: 700;
}

.resource-card p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 1rem;
  line-height: 1.6;
}

.card-footer {
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
}

.read-more {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  display: flex;
  align-items: center;
  gap: 4px;
}

.arrow {
  transition: transform 0.2s;
}

.resource-card:hover .arrow {
  transform: translateX(4px);
}
</style>
