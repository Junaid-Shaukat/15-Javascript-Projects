function openTab(tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
  
    // Deactivate all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
  
    // Activate the selected tab and show its content
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
  }
  