/**
 * scroll-animations.js
 * Script para animar elementos cuando entran en el viewport
 */

// Función para inicializar las animaciones
export function initScrollAnimations() {
  // Clase para los elementos que se animarán
  const animatedElements = [
    '.fade-in',
    '.slide-up',
    '.animate-fade-in-up',
    '.animate-fade-in-down',
    '.animate-fade-in-left',
    '.animate-fade-in-right'
  ];
  
  // Opciones del Intersection Observer
  const observerOptions = {
    root: null, // Viewport
    rootMargin: '0px',
    threshold: 0.1 // El elemento es visible cuando al menos el 10% está en el viewport
  };
  
  // Callback que se ejecutará cuando un elemento entre en el viewport
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Añadir clase 'visible' cuando el elemento entre en el viewport
        entry.target.classList.add('visible');
        
        // Si el elemento tiene atributo data-once="true", dejar de observarlo
        if (entry.target.dataset.once === 'true') {
          observer.unobserve(entry.target);
        }
      } else {
        // Si no tiene data-once, quitar la clase visible cuando salga del viewport
        if (entry.target.dataset.once !== 'true') {
          entry.target.classList.remove('visible');
        }
      }
    });
  };
  
  // Crear el observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  // Función para inicializar los elementos a observar
  const initElements = () => {
    // Seleccionar todos los elementos que coincidan con los selectores
    const elements = [];
    animatedElements.forEach(selector => {
      const elementsArray = Array.from(document.querySelectorAll(selector));
      elements.push(...elementsArray);
    });
    
    // Observar cada elemento
    elements.forEach(element => {
      observer.observe(element);
    });
  };
  
  // Inicializar si el DOM ya está cargado
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initElements();
  } else {
    // Si no, esperar a que el DOM esté cargado
    document.addEventListener('DOMContentLoaded', initElements);
  }
  
  // Re-inicializar cuando cambie la ruta (para SPA)
  if (typeof window !== 'undefined') {
    let lastUrl = location.href;
    
    // Crear un MutationObserver para detectar cambios en el DOM
    const mutationObserver = new MutationObserver(() => {
      const url = location.href;
      if (url !== lastUrl) {
        lastUrl = url;
        // Esperar a que el nuevo contenido se cargue
        setTimeout(initElements, 300);
      }
    });
    
    // Observar cambios en el cuerpo del documento
    mutationObserver.observe(document.body, { childList: true, subtree: true });
  }
  
  // Devolver una función para re-inicializar manualmente
  return initElements;
}

// Función para animar elementos de forma escalonada (stagger)
export function initStaggerAnimation(container, childSelector, delay = 100) {
  if (!container) return;
  
  const children = container.querySelectorAll(childSelector);
  
  children.forEach((child, index) => {
    child.style.transitionDelay = `${index * delay}ms`;
  });
}

// Función para animar contadores
export function initCounters(containerSelector = '.counter', speed = 50) {
  const counters = document.querySelectorAll(containerSelector);
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const count = 0;
    const increment = Math.ceil(target / speed);
    
    function updateCount() {
      const currentCount = parseInt(counter.innerText);
      
      if (currentCount < target) {
        counter.innerText = Math.min(currentCount + increment, target);
        setTimeout(updateCount, 20);
      }
    }
    
    // Iniciar contador cuando sea visible
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        updateCount();
        observer.unobserve(counter);
      }
    });
    
    observer.observe(counter);
  });
}

// Exportar funciones globalmente para uso directo
export default {
  initScrollAnimations,
  initStaggerAnimation,
  initCounters
};