document.addEventListener('DOMContentLoaded', function () {
    const tour = new Shepherd.Tour({
        defaultStepOptions: {
            cancelIcon: {
                enabled: true
            },
            classes: 'shadow-md bg-purple-dark',
            scrollTo: { behavior: 'smooth', block: 'center' }
        }
    });

    tour.addStep({
        id: 'welcome',
        text: 'Welcome to the Sign Language Detector App 👋! Let us guide you through the main features.',
        buttons: [
            {
                text: 'Next',
                action: tour.next
            }
        ],
        classes: 'custom-shepherd-step'
    });

    tour.addStep({
        id: 'collect-images',
        text: 'Use this section to collect images for training the sign language detector.📷',
        attachTo: {
            element: '#collect-images-btn',
            on: 'right'
        },
        buttons: [
            {
                text: 'Back',
                action: tour.back
            },
            {
                text: 'Next',
                action: tour.next
            }
        ],
        classes: 'custom-shepherd-step'
    });

    tour.addStep({
        id: 'create-dataset',
        text: 'Create a dataset from the collected images here.⚙️',
        attachTo: {
            element: '#create-dataset-btn',
            on: 'right'
        },
        buttons: [
            {
                text: 'Back',
                action: tour.back
            },
            {
                text: 'Next',
                action: tour.next
            }
        ],
        classes: 'custom-shepherd-step'
    });

    tour.addStep({
        id: 'train-classifier',
        text: 'Train the classifier using the dataset created.🧠',
        attachTo: {
            element: '#train-classifier-btn',
            on: 'right'
        },
        buttons: [
            {
                text: 'Back',
                action: tour.back
            },
            {
                text: 'Next',
                action: tour.next
            }
        ],
        classes: 'custom-shepherd-step'
    });

    tour.addStep({
        id: 'inference',
        text: 'Use this section to detect hand sign with the trained classifier.👉☝️✌️🤙',
        attachTo: {
            element: '#inference-btn',
            on: 'right'
        },
        buttons: [
            {
                text: 'Back',
                action: tour.back
            },
            {
                text: 'Finish',
                action: tour.complete
            }
        ],
        classes: 'custom-shepherd-step'
    });

    // Start the tour
    tour.start();
});
