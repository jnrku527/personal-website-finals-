<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient' // <--- CORRECTED PATH
import NavBar from '@/components/NavBar.vue'

// Reactive state variables
const guestbookEntries = ref([])
const newName = ref('')
const newMessage = ref('')
const loading = ref(false)
const error = ref(null)

// Function to fetch existing messages
const fetchMessages = async () => {
  loading.value = true
  error.value = null
  try {
    // Select all messages from the 'guestbook' table, ordered by creation time
    const { data, error: fetchError } = await supabase
      .from('guestbook')
      .select('id, name, message, created_at')
      .order('created_at', { ascending: false })

    if (fetchError) throw fetchError
    guestbookEntries.value = data || []
  } catch (err) {
    console.error('Error fetching messages:', err.message)
    error.value = 'Failed to load messages.'
  } finally {
    loading.value = false
  }
}

// Function to submit a new message
const submitMessage = async () => {
  if (!newName.value.trim() || !newMessage.value.trim()) {
    alert('Please enter your name and a message.')
    return
  }

  loading.value = true
  error.value = null

  try {
    // Insert the new entry into the 'guestbook' table
    const { data, error: insertError } = await supabase
      .from('guestbook')
      .insert([
        { name: newName.value.trim(), message: newMessage.value.trim() }
      ])
      .select('id, name, message, created_at') // Get the inserted data back

    if (insertError) throw insertError

    // Prepend the new entry to the entries list for immediate display
    if (data && data.length > 0) {
        guestbookEntries.value.unshift(data[0])
    }

    // Clear the form fields
    newName.value = ''
    newMessage.value = ''

  } catch (err) {
    console.error('Error submitting message:', err.message)
    error.value = 'Failed to submit message.'
  } finally {
    loading.value = false
  }
}

// Fetch messages when the component is first loaded
onMounted(() => {
  fetchMessages()
})

// Helper function to format the timestamp
const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString()
}
</script>

<template>
  <main>
    <NavBar />
    <div class="guestbook-container">
      <h1>Guestbook</h1>

      <form @submit.prevent="submitMessage" class="guestbook-form">
        <h2>Leave a Message</h2>
        <input 
          v-model="newName" 
          type="text" 
          placeholder="Your Name" 
          required
        />
        <textarea 
          v-model="newMessage" 
          placeholder="Your Message..." 
          rows="4" 
          required
        ></textarea>
        <button type="submit" :disabled="loading">
          {{ loading ? 'Submitting...' : 'Submit Message' }}
        </button>
      </form>

      <div class="messages-list">
        <h2>Messages ({{ guestbookEntries.length }})</h2>
        <p v-if="loading && guestbookEntries.length === 0">Loading messages...</p>
        <p v-if="error" class="error-message">{{ error }}</p>
        <p v-if="!loading && guestbookEntries.length === 0">No messages yet. Be the first!</p>

        <div v-for="entry in guestbookEntries" :key="entry.id" class="message-card">
          <div class="message-header">
            <strong>{{ entry.name }}</strong>
            <small>{{ formatTimestamp(entry.created_at) }}</small>
          </div>
          <p class="message-body">{{ entry.message }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.guestbook-container {
  padding: 8rem 5% 4rem; 
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 2rem;
  font-weight: bold;
  color: #333;
}

h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #007bff; /* Primary color hint */
}

/* Form Styling */
.guestbook-form {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
}

.guestbook-form input[type="text"],
.guestbook-form textarea {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.guestbook-form button {
  background-color: #007bff; 
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.guestbook-form button:hover:not(:disabled) {
  background-color: #0056b3;
}

.guestbook-form button:disabled {
  background-color: #a0c3e8;
  cursor: not-allowed;
}

/* Message List Styling */
.messages-list {
    margin-top: 2rem;
}

.message-card {
  border: 1px solid #e0e0e0;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.message-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.message-header strong {
  color: #333;
}

.message-header small {
  color: #6c757d;
}

.message-body {
  margin: 0;
  line-height: 1.5;
  color: #495057;
}

.error-message {
    color: red;
    font-weight: bold;
}

@media (max-width: 600px) {
    .guestbook-container {
        padding: 6rem 5% 2rem;
    }
}
</style>