// Локальні дані для кроків процесу
const stepsData = [
    {
      title: 'Подання заявки',
      description:
        'Заповніть онлайн-форму заявки на нашому сайті, вкажіть основну інформацію про дитину та контактні дані батьків.'
    },
    {
      title: 'Підтвердження отримання',
      description:
        'Після відправлення форми ви отримаєте лист на електронну пошту з підтвердженням отримання заявки та подальшими інструкціями.'
    },
    {
      title: 'Знайомча зустріч',
      description:
        'Ми домовимося про зустріч у школі або онлайн, щоб познайомитися з вами та дитиною, відповісти на запитання та показати простір.'
    },
    {
      title: 'Оцінка готовності дитини',
      description:
        'Педагоги в ігровій формі оцінюють готовність дитини до навчання, її інтереси, емоційний стан та особливі потреби.'
    },
    {
      title: 'Підтвердження зарахування',
      description:
        'Після успішного проходження попередніх етапів ви отримаєте підтвердження зарахування та деталі щодо початку навчання.'
    },
    {
      title: 'Завершення реєстрації',
      description:
        'Підписуємо необхідні документи, узгоджуємо графік відвідування, оплати та знайомимо вас із правилами Little Learners Academy.'
    }
  ];
  
  function renderSteps() {
    const stepsContainer = document.getElementById('steps-container');
    if (!stepsContainer) return;
  
    stepsData.forEach((step, index) => {
      const stepElement = document.createElement('div');
      stepElement.classList.add('step');
  
      stepElement.innerHTML = `
        <div class="number">${String(index + 1).padStart(2, '0')}</div>
        <div class="card">
          <div class="card-title">${step.title}</div>
          <div class="card-description">${step.description}</div>
        </div>
      `;
  
      stepsContainer.appendChild(stepElement);
    });
  }
  
  document.addEventListener('DOMContentLoaded', renderSteps);