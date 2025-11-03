<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <main>
    <NavBar />
    <div class="about-container">
      <h1>About Me</h1>
      <div class="content-wrapper">
        <div class="profile-image">
          <img src="/profile-photo.jpg" alt="Your Profile Photo" class="profile-pic">
        </div>
        <div class="details">
          <div class="info-cards">
            <div class="card">
              <span class="icon">💻</span>
              <h2>Skill Focus</h2>
              <p>Your Primary Skill</p>
              <p>Your Secondary Skill</p>
            </div>
            <div class="card">
              <span class="icon">📚</span>
              <h2>Education</h2>
              <p>Your University Name</p>
              <p>Your Course/Major</p>
            </div>
          </div>
          <p class="bio">
            Hello, I am **[Your Name Here]**. I am a student/professional focused on [Your Field]. This space is where I showcase my projects, skills, and background. I am passionate about [Your Interest] and always looking for new challenges. Please feel free to check out my work!
          </p>
        </div>
      </div>
      <div class="scroll-indicator">
        <span class="arrow">⬇️</span>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* All the CSS remains, using neutral black/white/gray/blue tones */
.about-container {
  padding: 8rem 5% 4rem; 
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 2rem;
  font-weight: bold;
  color: #333; 
}

.content-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 3rem;
}

.profile-image {
  flex-shrink: 0;
  border-radius: 1rem; 
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); 
  width: 350px; 
  height: auto;
}

.profile-pic {
  width: 100%;
  display: block;
}

.details {
  flex-grow: 1;
}

.info-cards { 
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.card {
  flex: 1;
  padding: 1.5rem;
  border: 1px solid #ddd; 
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  text-align: center;
  background-color: white;
}

.card .icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.5rem;
}

.card h2 {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 0 0.5rem;
  color: #333;
}

.card p {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}

.bio {
  line-height: 1.7;
  font-size: 1rem;
  color: #444;
}

.scroll-indicator {
  text-align: center;
  margin-top: 4rem;
}

.scroll-indicator .arrow {
  font-size: 1.5rem;
}

@media (max-width: 900px) {
  .content-wrapper {
    flex-direction: column;
    align-items: center;
  }
  .profile-image {
    width: 80%;
    max-width: 350px;
  }
  .info-cards {
    flex-direction: column;
  }
}
</style>