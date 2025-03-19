<template>
  <div class="service-card" :class="{ 'featured': isFeatured }">
    <div class="service-icon" :style="{'background-color': iconBgColor}">
      <span>{{ icon }}</span>
    </div>
    <h3 class="service-title">{{ title }}</h3>
    <p class="service-description">{{ description }}</p>
    <div class="service-features">
      <ul>
        <li v-for="(feature, index) in features" :key="index">
          {{ feature }}
        </li>
      </ul>
    </div>
    <div class="service-action">
      <button class="service-button" @click="$emit('action-click')">
        {{ actionText }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: '🔧'
    },
    iconBgColor: {
      type: String,
      default: 'rgba(66, 198, 255, 0.1)'
    },
    features: {
      type: Array,
      default: () => []
    },
    actionText: {
      type: String,
      default: 'Learn More'
    },
    isFeatured: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    emitClick() {
      this.$emit('click');
    }
  }
}
</script>

<style scoped>
.service-card {
  background-color: rgba(24, 32, 70, 0.6);
  border-radius: 10px;
  padding: 30px;
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(66, 198, 255, 0.1);
}

.service-card.featured {
  border: 1px solid rgba(66, 198, 255, 0.5);
  box-shadow: 0 5px 20px rgba(66, 198, 255, 0.15);
}

.service-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin-bottom: 20px;
}

.service-title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 15px;
}

.service-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 20px;
}

.service-features {
  flex: 1;
  margin-bottom: 20px;
}

.service-features ul {
  padding-left: 20px;
}

.service-features li {
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.8);
}

.service-button {
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  font-weight: 600;
  background: linear-gradient(to right, #e83a95, #42c6ff);
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
}

.service-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(66, 198, 255, 0.3);
}

.featured .service-button {
  background: white;
  color: #0a0e29;
}

.featured .service-button:hover {
  background: rgba(255, 255, 255, 0.9);
}
</style>