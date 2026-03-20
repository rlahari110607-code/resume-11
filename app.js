document.addEventListener('DOMContentLoaded', () => {
    // ---------------- Navigation Logic ----------------
    const navItems = document.querySelectorAll('.nav-item');
    const viewSections = document.querySelectorAll('.view-section');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // Get target view ID
            const targetId = item.getAttribute('data-target');
            
            // Hide all view sections
            viewSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show target view section
            const targetSection = document.getElementById(targetId);
            if(targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // ---------------- Mock Upload Logic ----------------
    const uploadResumeBtn = document.querySelector('#upload-resume .btn');
    const uploadJDBtn = document.querySelector('#upload-jd .btn');
    const analyzeBtn = document.getElementById('btn-analyze');
    
    let isResumeUploaded = false;
    let isJDUploaded = false;

    if(uploadResumeBtn) {
        uploadResumeBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent trigger card click if any
            uploadResumeBtn.textContent = 'Uploaded: resume.pdf';
            uploadResumeBtn.classList.add('btn-secondary');
            uploadResumeBtn.classList.remove('btn-primary');
            document.querySelector('#upload-resume').style.borderColor = 'var(--color-success)';
            document.querySelector('#upload-resume .upload-icon-wrapper').style.color = 'var(--color-success)';
            document.querySelector('#upload-resume .upload-icon-wrapper').style.backgroundColor = 'var(--color-success-light)';
            
            isResumeUploaded = true;
            checkAnalyzeReady();
        });
    }

    if(uploadJDBtn) {
        uploadJDBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            uploadJDBtn.textContent = 'Added: Frontend Dev JD';
            document.querySelector('#upload-jd').style.borderColor = 'var(--color-success)';
            document.querySelector('#upload-jd .upload-icon-wrapper').style.color = 'var(--color-success)';
            document.querySelector('#upload-jd .upload-icon-wrapper').style.backgroundColor = 'var(--color-success-light)';
            
            isJDUploaded = true;
            checkAnalyzeReady();
        });
    }

    function checkAnalyzeReady() {
        if(isResumeUploaded && isJDUploaded) {
            analyzeBtn.removeAttribute('disabled');
            analyzeBtn.textContent = 'Analyze & Build Roadmap';
        }
    }
    
    if(analyzeBtn) {
        analyzeBtn.addEventListener('click', () => {
            // Mock transition to analysis page
            document.querySelector('.nav-item[data-target="view-analysis"]').click();
        });
    }

    // Chatbot mock functionality
    const chatbotBtn = document.getElementById('chatbot-trigger');
    const chatbotPopover = document.getElementById('chatbot-popover');
    const closeChatBtn = document.getElementById('close-chat');

    if (chatbotBtn && chatbotPopover && closeChatBtn) {
        chatbotBtn.addEventListener('click', () => {
            chatbotPopover.classList.toggle('active');
        });

        closeChatBtn.addEventListener('click', () => {
            chatbotPopover.classList.remove('active');
        });
    }
});
