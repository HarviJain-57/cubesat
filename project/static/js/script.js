// // JavaScript for interactive elements
// document.addEventListener('DOMContentLoaded', function() {
//     // Mobile menu toggle
//     const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
//     const mainNav = document.getElementById('mainNav');
    
//     mobileMenuBtn.addEventListener('click', function() {
//         mainNav.classList.toggle('active');
        
//         if (mainNav.classList.contains('active')) {
//             mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
//         } else {
//             mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
//         }
//     });
    
//     // Category navigation
//     const categoryLinks = document.querySelectorAll('.category-link');
//     const homePage = document.getElementById('home-page');
//     const categoryPages = document.getElementById('category-pages');
//     const productDetailPages = document.getElementById('product-detail-pages');
    
//     categoryLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             const category = this.getAttribute('data-category');
            
//             // Hide all pages
//             homePage.style.display = 'none';
//             categoryPages.querySelectorAll('.product-page').forEach(page => {
//                 page.style.display = 'none';
//             });
//             productDetailPages.querySelectorAll('.product-page').forEach(page => {
//                 page.style.display = 'none';
//             });
            
//             // Show the selected category page
//             const categoryPage = document.getElementById(`${category}-page`);
//             if (categoryPage) {
//                 categoryPage.style.display = 'block';
//                 window.scrollTo(0, 0);
//             }
//         });
//     });
    
//     // View all products button
//     const viewAllBtn = document.getElementById('view-all-products');
//     if (viewAllBtn) {
//         viewAllBtn.addEventListener('click', function(e) {
//             e.preventDefault();
            
//             // Hide home page and show first category page
//             homePage.style.display = 'none';
//             const firstCategoryPage = document.querySelector('.product-page');
//             if (firstCategoryPage) {
//                 firstCategoryPage.style.display = 'block';
//                 window.scrollTo(0, 0);
//             }
//         });
//     }
    
//     // View product detail
//     const viewProductDetailBtns = document.querySelectorAll('.view-product-detail');
//     viewProductDetailBtns.forEach(btn => {
//         btn.addEventListener('click', function(e) {
//             e.preventDefault();
//             const product = this.getAttribute('data-product');
            
//             // Hide all pages
//             homePage.style.display = 'none';
//             categoryPages.querySelectorAll('.product-page').forEach(page => {
//                 page.style.display = 'none';
//             });
//             productDetailPages.querySelectorAll('.product-page').forEach(page => {
//                 page.style.display = 'none';
//             });
            
//             // Show the product detail page
//             const productPage = document.getElementById(`${product}-page`);
//             if (productPage) {
//                 productPage.style.display = 'block';
//                 window.scrollTo(0, 0);
//             }
//         });
//     });
    
//     // Back to home from breadcrumb
//     const breadcrumbHomeLinks = document.querySelectorAll('.breadcrumb a[href="#home"]');
//     breadcrumbHomeLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
            
//             // Show home page, hide others
//             homePage.style.display = 'block';
//             categoryPages.querySelectorAll('.product-page').forEach(page => {
//                 page.style.display = 'none';
//             });
//             productDetailPages.querySelectorAll('.product-page').forEach(page => {
//                 page.style.display = 'none';
//             });
            
//             window.scrollTo(0, 0);
//         });
//     });
    
//     // Filter buttons
//     const filterButtons = document.querySelectorAll('.filter-btn');
    
//     filterButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             // Remove active class from all buttons
//             filterButtons.forEach(btn => btn.classList.remove('active'));
            
//             // Add active class to clicked button
//             this.classList.add('active');
            
//             // In a real implementation, this would filter the products
//             console.log('Filtering by: ' + this.textContent);
//         });
//     });
    
//     // Inquiry modal functionality
//     const inquiryModal = document.getElementById('inquiryModal');
//     const inquireButtons = document.querySelectorAll('.inquire-btn');
//     const closeModal = document.querySelector('.close-modal');
//     const productField = document.getElementById('product');
    
//     inquireButtons.forEach(button => {
//         button.addEventListener('click', function(e) {
//             e.preventDefault();
//             const productName = this.getAttribute('data-product');
//             if (productName) {
//                 productField.value = productName;
//             }
//             inquiryModal.style.display = 'flex';
//         });
//     });

//     closeModal.addEventListener('click', function() {
//         inquiryModal.style.display = 'none';
//     });
    
//     window.addEventListener('click', function(e) {
//         if (e.target === inquiryModal) {
//             inquiryModal.style.display = 'none';
//         }
//     });
    
//     // Form submission
//     const inquiryForm = document.querySelector('.inquiry-form');
//     inquiryForm.addEventListener('submit', function(e) {
//         e.preventDefault();
//         alert('Thank you for your inquiry! We will contact you shortly.');
//         inquiryModal.style.display = 'none';
//         inquiryForm.reset();
//     });

//     // Ensure video plays correctly on mobile
//     const heroVideo = document.getElementById('heroVideo');
//     if (heroVideo) {
//         heroVideo.addEventListener('loadedmetadata', function() {
//             // Set video to play at correct speed
//             heroVideo.playbackRate = 1.0;
//         });
//     }
// });








// JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // =======================
    // Mobile menu toggle
    // =======================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.getElementById('mainNav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            if (mainNav.classList.contains('active')) {
                mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }

    // =======================
    // Smooth scroll for header links
    // =======================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });

    // =======================
    // View Details button
    // (Handled by Flask routes with <a href>)
    // =======================
    const viewDetailsBtns = document.querySelectorAll('.view-products-btn');
    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // No JS needed – <a> already navigates to /product/<id>
            // But we could log for debug
            console.log("Navigating to:", this.href);
        });
    });

    // =======================
    // Inquiry modal functionality
    // =======================
    const inquiryModal = document.getElementById('inquiryModal');
    const inquireButtons = document.querySelectorAll('.inquire-btn');
    const closeModal = document.querySelector('.close-modal');
    const productField = document.getElementById('modal-product');
    
    if (inquiryModal) {
        inquireButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const productName = this.getAttribute('data-product');
                if (productName && productField) {
                    productField.value = productName;
                }
                inquiryModal.style.display = 'flex';
            });
        });

        if (closeModal) {
            closeModal.addEventListener('click', function() {
                inquiryModal.style.display = 'none';
            });
        }

        window.addEventListener('click', function(e) {
            if (e.target === inquiryModal) {
                inquiryModal.style.display = 'none';
            }
        });

        // Form submission
        const inquiryForm = document.querySelector('.inquiry-form');
        if (inquiryForm) {
            inquiryForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('✅ Thank you for your inquiry! We will contact you shortly.');
                inquiryModal.style.display = 'none';
                inquiryForm.reset();
            });
        }
    }

    // =======================
    // Ensure video plays correctly on mobile
    // =======================
    const heroVideo = document.getElementById('heroVideo');
    if (heroVideo) {
        heroVideo.addEventListener('loadedmetadata', function() {
            heroVideo.playbackRate = 1.0;
        });
    }
});
