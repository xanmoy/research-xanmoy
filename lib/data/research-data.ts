export type ResearchProject = {
    id: string
    slug: string
    title: string
    description: string
    image: string
    tags: string[]
    content: ResearchContent[]
    team?: TeamMember[]
    publications?: Publication[]
    relatedProjects?: string[]
}

export type ResearchContent = {
    type: "paragraph" | "heading" | "subheading" | "image" | "code" | "quote" | "list" | "video"
    content: string
    items?: string[] // For lists
    caption?: string // For images
    language?: string // For code blocks
    alt?: string // For images
}

export type TeamMember = {
    name: string
    role: string
    avatar: string
    bio?: string
}

export type Publication = {
    title: string
    authors: string
    conference: string
    year: string
    link: string
    abstract?: string
}

export const researchProjects: ResearchProject[] = [
    {
        id: "1",
        slug: "distributed-ai-systems",
        title: "Distributed AI Systems",
        description:
            "A framework for deploying and managing distributed AI workloads across heterogeneous computing environments.",
        image: "/placeholder.svg?height=400&width=800",
        tags: ["Distributed Systems", "AI", "Cloud Computing"],
        content: [
            {
                type: "paragraph",
                content:
                    "The Distributed AI Systems project aims to develop a comprehensive framework for deploying, managing, and scaling AI workloads across heterogeneous computing environments. As AI models grow in size and complexity, the need for distributed computing approaches becomes increasingly important.",
            },
            {
                type: "heading",
                content: "Project Overview",
            },
            {
                type: "paragraph",
                content:
                    "Modern AI systems, particularly large language models and deep neural networks, require substantial computational resources for both training and inference. Distributing these workloads across multiple machines can reduce training time, enable larger models, and provide more robust and scalable inference services.",
            },
            {
                type: "image",
                content: "/placeholder.svg?height=400&width=800",
                caption: "Architecture of our distributed AI framework",
                alt: "Diagram showing distributed AI architecture",
            },
            {
                type: "paragraph",
                content:
                    "Our framework addresses several key challenges in distributed AI, including efficient model parallelism, data parallelism, communication optimization, fault tolerance, and heterogeneous hardware utilization. It provides a unified API that abstracts away the complexities of distributed computing, allowing researchers and engineers to focus on model development.",
            },
            {
                type: "heading",
                content: "Key Innovations",
            },
            {
                type: "subheading",
                content: "Adaptive Model Partitioning",
            },
            {
                type: "paragraph",
                content:
                    "Our framework includes an adaptive model partitioning algorithm that automatically determines the optimal way to split a neural network across multiple devices. This algorithm considers the computational requirements of each layer, the available hardware, and the communication costs between devices.",
            },
            {
                type: "code",
                content:
                    "# Example of model partitioning in our framework\nfrom distributed_ai import ModelPartitioner\n\n# Initialize the partitioner with hardware information\npartitioner = ModelPartitioner(devices=available_devices)\n\n# Analyze the model and generate an optimal partitioning strategy\npartitioning_strategy = partitioner.analyze(model)\n\n# Apply the partitioning strategy to the model\ndistributed_model = partitioner.partition(model, partitioning_strategy)\n\n# The model can now be trained or used for inference across multiple devices\ndistributed_model.train(training_data)",
                language: "python",
            },
            {
                type: "subheading",
                content: "Dynamic Resource Allocation",
            },
            {
                type: "paragraph",
                content:
                    "Traditional distributed systems often use static resource allocation, which can lead to inefficient resource utilization. Our framework implements dynamic resource allocation that adjusts the distribution of workloads based on real-time monitoring of system performance and resource availability.",
            },
            {
                type: "paragraph",
                content:
                    "This dynamic allocation ensures that resources are used efficiently and can adapt to changing workloads, such as handling spikes in inference requests or adjusting to the computational needs of different phases of model training.",
            },
            {
                type: "image",
                content: "/placeholder.svg?height=400&width=800",
                caption: "Dynamic resource allocation in action, showing adaptation to workload changes",
                alt: "Graph showing dynamic resource allocation",
            },
            {
                type: "subheading",
                content: "Fault Tolerance and Recovery",
            },
            {
                type: "paragraph",
                content:
                    "Distributed systems must be resilient to failures. Our framework implements several fault tolerance mechanisms, including checkpointing, redundant computation, and automatic recovery. When a node fails, the system can redistribute its workload and continue operation with minimal disruption.",
            },
            {
                type: "quote",
                content:
                    "The true test of a distributed system is not how it performs when everything is working perfectly, but how it handles failures and recovers from them.",
            },
            {
                type: "heading",
                content: "Applications and Case Studies",
            },
            {
                type: "paragraph",
                content:
                    "We have applied our distributed AI framework to several real-world applications, demonstrating its effectiveness and versatility.",
            },
            {
                type: "subheading",
                content: "Large Language Model Training",
            },
            {
                type: "paragraph",
                content:
                    "Using our framework, we were able to train a 10-billion parameter language model across a cluster of 64 GPUs, achieving near-linear scaling efficiency. The adaptive partitioning algorithm automatically determined the optimal combination of data and model parallelism, reducing training time by 40% compared to traditional approaches.",
            },
            {
                type: "subheading",
                content: "Real-time Computer Vision System",
            },
            {
                type: "paragraph",
                content:
                    "We deployed a distributed computer vision system for real-time video analysis across a heterogeneous cluster of edge devices and cloud servers. The system dynamically allocated tasks based on the computational capabilities of each device and the current workload, maintaining low latency even during peak usage periods.",
            },
            {
                type: "list",
                content: "Key results from this deployment included:",
                items: [
                    "95% reduction in bandwidth usage compared to cloud-only processing",
                    "Average latency of 50ms for object detection tasks",
                    "Graceful degradation during network connectivity issues",
                    "Automatic scaling to handle varying numbers of video streams",
                ],
            },
            {
                type: "heading",
                content: "Future Directions",
            },
            {
                type: "paragraph",
                content:
                    "Our ongoing research focuses on several areas for improvement and expansion of the distributed AI framework:",
            },
            {
                type: "list",
                content: "Current research directions include:",
                items: [
                    "Federated learning integration for privacy-preserving distributed training",
                    "Specialized optimizations for emerging AI hardware accelerators",
                    "Improved communication protocols for reducing network overhead",
                    "Automated hyperparameter optimization in distributed settings",
                    "Energy-efficient scheduling algorithms for sustainable AI computing",
                ],
            },
            {
                type: "paragraph",
                content:
                    "We are also exploring applications in new domains, including scientific computing, autonomous systems, and healthcare analytics, where distributed AI can provide significant benefits in terms of scale, performance, and reliability.",
            },
            {
                type: "heading",
                content: "Conclusion",
            },
            {
                type: "paragraph",
                content:
                    "The Distributed AI Systems project represents a significant step forward in making advanced AI capabilities more accessible, efficient, and scalable. By addressing the key challenges of distributed computing for AI workloads, our framework enables researchers and engineers to focus on developing innovative models and applications without being limited by the constraints of individual machines.",
            },
            {
                type: "paragraph",
                content:
                    "As AI continues to advance and become more integrated into critical systems, the need for robust, efficient, and flexible distributed computing approaches will only grow. Our research aims to meet this need and contribute to the development of the next generation of AI systems.",
            },
        ],
        team: [
            {
                name: "Dr. Jane Smith",
                role: "Principal Investigator",
                avatar: "/placeholder.svg?height=100&width=100",
                bio: "Expert in distributed systems and machine learning",
            },
            {
                name: "Dr. Michael Chen",
                role: "Senior Researcher",
                avatar: "/placeholder.svg?height=100&width=100",
                bio: "Specializes in parallel computing and system optimization",
            },
            {
                name: "Sarah Johnson",
                role: "PhD Candidate",
                avatar: "/placeholder.svg?height=100&width=100",
                bio: "Researching fault tolerance in distributed AI systems",
            },
        ],
        publications: [
            {
                title: "Adaptive Model Partitioning for Distributed Deep Learning",
                authors: "J. Smith, M. Chen, S. Johnson",
                conference: "International Conference on Machine Learning (ICML)",
                year: "2023",
                link: "#",
                abstract:
                    "This paper presents a novel approach to automatically partition deep neural networks across heterogeneous devices for efficient distributed training and inference.",
            },
            {
                title: "Dynamic Resource Allocation in Distributed AI Systems",
                authors: "M. Chen, J. Smith, R. Williams",
                conference: "Conference on Neural Information Processing Systems (NeurIPS)",
                year: "2022",
                link: "#",
                abstract:
                    "We introduce a dynamic resource allocation framework that adapts to changing workloads and system conditions in distributed AI environments.",
            },
        ],
        relatedProjects: ["2", "3"],
    },
    {
        id: "2",
        slug: "quantum-computing-algorithms",
        title: "Quantum Computing Algorithms",
        description:
            "Novel quantum algorithms for optimization problems with applications in logistics and supply chain management.",
        image: "/placeholder.svg?height=400&width=800",
        tags: ["Quantum Computing", "Algorithms", "Optimization"],
        content: [
            {
                type: "paragraph",
                content:
                    "The Quantum Computing Algorithms project focuses on developing novel quantum algorithms for solving complex optimization problems, with a particular emphasis on applications in logistics and supply chain management. As quantum computing hardware continues to advance, there is a growing opportunity to develop algorithms that can leverage quantum effects to solve problems that are intractable for classical computers.",
            },
            {
                type: "heading",
                content: "Project Overview",
            },
            {
                type: "paragraph",
                content:
                    "Optimization problems are ubiquitous in logistics and supply chain management, from vehicle routing and scheduling to inventory management and facility location. Many of these problems are NP-hard, meaning that classical algorithms struggle to find optimal solutions for large problem instances.",
            },
            {
                type: "paragraph",
                content:
                    "Quantum computing offers a promising approach to these challenges through algorithms that can explore multiple solutions simultaneously through quantum superposition and entanglement. Our research focuses on developing practical quantum algorithms that can be implemented on near-term quantum devices while providing meaningful advantages over classical approaches.",
            },
            {
                type: "image",
                content: "/placeholder.svg?height=400&width=800",
                caption: "Quantum vs. classical optimization for a vehicle routing problem",
                alt: "Comparison chart of quantum vs classical optimization",
            },
            {
                type: "heading",
                content: "Key Innovations",
            },
            {
                type: "subheading",
                content: "Hybrid Quantum-Classical Algorithms",
            },
            {
                type: "paragraph",
                content:
                    "Given the limitations of current quantum hardware, we have developed hybrid quantum-classical algorithms that leverage the strengths of both paradigms. These algorithms use quantum processors for specific subroutines where they can provide an advantage, while relying on classical computers for other parts of the computation.",
            },
            {
                type: "code",
                content:
                    '# Example of a hybrid quantum-classical algorithm for optimization\nfrom qiskit import Aer, execute\nfrom qiskit.algorithms import QAOA\nfrom qiskit.algorithms.optimizers import COBYLA\n\n# Define the problem as a quadratic program\nqubo = QuadraticProgram()\n# Add variables and constraints for the optimization problem\n# ...\n\n# Convert to Ising Hamiltonian\noperator, offset = qubo.to_ising()\n\n# Set up the QAOA algorithm\nqaoa = QAOA(\n    quantum_instance=Aer.get_backend(\'statevector_simulator\'),\n    optimizer=COBYLA(),\n    reps=3  # Number of QAOA layers\n)\n\n# Run the algorithm\nresult = qaoa.compute_minimum_eigenvalue(operator)\n\n# Process the results\nx = qubo.sample_from_eigenvector(result.eigenstate)\nprint(f"Solution: {x}")\nprint(f"Value: {result.eigenvalue.real + offset}")',
                language: "python",
            },
            {
                type: "subheading",
                content: "Problem-Specific Quantum Encodings",
            },
            {
                type: "paragraph",
                content:
                    "We have developed novel quantum encodings for specific logistics problems that reduce the number of qubits required and improve the performance of quantum algorithms. These encodings exploit the structure of the problems to create more efficient quantum representations.",
            },
            {
                type: "paragraph",
                content:
                    "For example, our compact encoding for the vehicle routing problem reduces the qubit requirements by up to 60% compared to standard encodings, making it feasible to solve meaningful problem instances on current quantum hardware.",
            },
            {
                type: "subheading",
                content: "Error Mitigation Techniques",
            },
            {
                type: "paragraph",
                content:
                    "Current quantum computers are noisy and prone to errors. We have developed specialized error mitigation techniques for optimization algorithms that can improve the quality of solutions even in the presence of hardware noise.",
            },
            {
                type: "quote",
                content:
                    "The challenge in quantum computing is not just developing algorithms that work in theory, but making them work in practice on noisy, imperfect hardware.",
            },
            {
                type: "heading",
                content: "Applications and Case Studies",
            },
            {
                type: "subheading",
                content: "Last-Mile Delivery Optimization",
            },
            {
                type: "paragraph",
                content:
                    "We applied our quantum algorithms to the last-mile delivery problem, which involves optimizing the routes of delivery vehicles from a distribution center to multiple customer locations. Using a 27-qubit quantum processor, we were able to find solutions that were on average 15% more efficient than those found by classical heuristics for problem instances with up to 10 delivery locations.",
            },
            {
                type: "image",
                content: "/placeholder.svg?height=400&width=800",
                caption: "Optimized delivery routes generated by our quantum algorithm",
                alt: "Map showing optimized delivery routes",
            },
            {
                type: "subheading",
                content: "Supply Chain Network Design",
            },
            {
                type: "paragraph",
                content:
                    "Another application of our research is in supply chain network design, which involves determining the optimal locations for facilities such as warehouses and distribution centers. Our quantum algorithm for this problem can consider multiple objectives simultaneously, such as minimizing cost, reducing carbon emissions, and improving resilience to disruptions.",
            },
            {
                type: "list",
                content: "Key results from this application included:",
                items: [
                    "20% reduction in total network cost compared to classical methods",
                    "30% improvement in supply chain resilience to disruptions",
                    "Ability to explore a much larger solution space in the same computational time",
                    "Better handling of multiple competing objectives",
                ],
            },
            {
                type: "heading",
                content: "Future Directions",
            },
            {
                type: "paragraph",
                content:
                    "Our ongoing research in quantum algorithms for logistics and supply chain optimization is focused on several promising directions:",
            },
            {
                type: "list",
                content: "Current research directions include:",
                items: [
                    "Scaling our algorithms to handle larger problem instances",
                    "Developing specialized quantum algorithms for dynamic and stochastic optimization problems",
                    "Exploring quantum machine learning approaches for predictive logistics",
                    "Creating industry-specific quantum optimization frameworks",
                    "Investigating the theoretical limits of quantum advantage for different classes of optimization problems",
                ],
            },
            {
                type: "paragraph",
                content:
                    "As quantum hardware continues to improve, we expect to see increasing practical advantages from quantum algorithms for logistics and supply chain optimization. Our goal is to develop algorithms that can provide real-world value on near-term quantum computers while also laying the groundwork for more powerful approaches as the technology matures.",
            },
            {
                type: "heading",
                content: "Conclusion",
            },
            {
                type: "paragraph",
                content:
                    "The Quantum Computing Algorithms project represents a significant step toward practical quantum advantage in logistics and supply chain management. By developing specialized quantum algorithms and hybrid approaches that can run on current and near-term quantum hardware, we are helping to bridge the gap between theoretical quantum computing and real-world applications.",
            },
            {
                type: "paragraph",
                content:
                    "As global supply chains become increasingly complex and face growing pressures from factors such as climate change, geopolitical tensions, and changing consumer expectations, the need for more powerful optimization tools will only increase. Quantum computing offers a promising path to meeting these challenges and creating more efficient, resilient, and sustainable supply chain networks.",
            },
        ],
        team: [
            {
                name: "Dr. Robert Williams",
                role: "Principal Investigator",
                avatar: "/placeholder.svg?height=100&width=100",
                bio: "Expert in quantum algorithms and computational complexity",
            },
            {
                name: "Dr. Lisa Chen",
                role: "Senior Researcher",
                avatar: "/placeholder.svg?height=100&width=100",
                bio: "Specializes in optimization algorithms and operations research",
            },
            {
                name: "Alex Johnson",
                role: "PhD Candidate",
                avatar: "/placeholder.svg?height=100&width=100",
                bio: "Researching quantum approaches to vehicle routing problems",
            },
        ],
        publications: [
            {
                title: "Hybrid Quantum-Classical Algorithms for Last-Mile Delivery Optimization",
                authors: "R. Williams, L. Chen, A. Johnson",
                conference: "IEEE Quantum Computing Conference",
                year: "2023",
                link: "#",
                abstract:
                    "This paper presents a novel hybrid quantum-classical algorithm for optimizing last-mile delivery routes, demonstrating a 15% improvement over classical methods.",
            },
            {
                title: "Compact Quantum Encodings for Vehicle Routing Problems",
                authors: "L. Chen, R. Williams, J. Smith",
                conference: "ACM Quantum Computing Journal",
                year: "2022",
                link: "#",
                abstract:
                    "We introduce a compact quantum encoding for vehicle routing problems that reduces qubit requirements by up to 60% while maintaining solution quality.",
            },
        ],
        relatedProjects: ["1", "3"],
    },
    {
        id: "3",
        slug: "machine-learning-optimization",
        title: "Machine Learning Optimization",
        description: "Techniques for optimizing neural network training and inference on resource-constrained devices.",
        image: "/placeholder.svg?height=400&width=800",
        tags: ["Machine Learning", "Optimization", "Edge Computing"],
        content: [
            {
                type: "paragraph",
                content:
                    "The Machine Learning Optimization project focuses on developing techniques to make neural networks more efficient for both training and inference, with a particular emphasis on deployment to resource-constrained edge devices. As machine learning applications continue to expand beyond cloud environments to smartphones, IoT devices, and embedded systems, the need for efficient ML models becomes increasingly important.",
            },
            {
                type: "heading",
                content: "Project Overview",
            },
            {
                type: "paragraph",
                content:
                    "Edge devices typically have limited computational resources, memory, and power compared to cloud servers. Deploying sophisticated neural networks to these devices requires careful optimization to ensure acceptable performance and energy efficiency while maintaining accuracy.",
            },
            {
                type: "paragraph",
                content:
                    "Our research explores a comprehensive set of optimization techniques spanning the entire ML lifecycle, from model architecture design to training procedures to deployment strategies. We aim to develop methods that can be applied across a wide range of applications and hardware platforms.",
            },
            {
                type: "image",
                content: "/placeholder.svg?height=400&width=800",
                caption: "Comparison of model size, inference speed, and accuracy for different optimization techniques",
                alt: "Chart comparing optimization techniques",
            },
            {
                type: "heading",
                content: "Key Innovations",
            },
            {
                type: "subheading",
                content: "Neural Architecture Search for Edge Devices",
            },
            {
                type: "paragraph",
                content:
                    "We have developed a hardware-aware neural architecture search (NAS) framework that automatically designs neural network architectures optimized for specific edge devices. Unlike traditional NAS approaches that focus primarily on accuracy, our framework explicitly considers hardware constraints such as memory limitations, available operations, and energy consumption.",
            },
            {
                type: "code",
                content:
                    "# Example of our hardware-aware NAS framework\nfrom edge_nas import HardwareAwareNAS\n\n# Define the target hardware platform\nhardware_spec = {\n    'memory': 512,  # MB\n    'compute': 2.0,  # GFLOPS\n    'power': 1.5,   # Watts\n    'supported_ops': ['conv2d', 'depthwise_conv', 'add', 'concat', 'pool']\n}\n\n# Define the search space\nsearch_space = {\n    'num_layers': (3, 12),\n    'channels': [16, 32, 64, 128],\n    'kernel_sizes': [3, 5, 7],\n    # Additional search parameters...\n}\n\n# Initialize the NAS framework\nnas = HardwareAwareNAS(\n    hardware_spec=hardware_spec,\n    search_space=search_space,\n    dataset='cifar10',\n    task='classification'\n)\n\n# Run the search\nbest_model = nas.search(\n    max_trials=100,\n    optimization_objective='accuracy',\n    constraints=['latency < 50ms', 'memory < 400MB']\n)\n\n# Train the discovered model\ntrained_model = nas.train(best_model, epochs=200)\n\n# Export for deployment\nnas.export(trained_model, format='tflite')",
                language: "python",
            },
            {
                type: "paragraph",
                content:
                    "Our NAS framework has discovered novel architectures that achieve up to 3x better efficiency-accuracy trade-offs compared to manually designed networks like MobileNet and EfficientNet when deployed on specific edge devices.",
            },
            {
                type: "subheading",
                content: "Adaptive Quantization",
            },
            {
                type: "paragraph",
                content:
                    "Quantization reduces the precision of neural network weights and activations, typically from 32-bit floating point to 8-bit or even lower precision integers. This can significantly reduce memory requirements and improve computational efficiency, especially on hardware with dedicated support for integer operations.",
            },
            {
                type: "paragraph",
                content:
                    "We have developed an adaptive quantization technique that applies different levels of quantization to different parts of the network based on their sensitivity to precision loss. This approach achieves better accuracy-efficiency trade-offs compared to uniform quantization across the entire network.",
            },
            {
                type: "image",
                content: "/placeholder.svg?height=400&width=800",
                caption: "Visualization of adaptive quantization across network layers",
                alt: "Diagram of adaptive quantization",
            },
            {
                type: "subheading",
                content: "On-Device Learning",
            },
            {
                type: "paragraph",
                content:
                    "Traditional machine learning workflows involve training models in the cloud and deploying them to edge devices. However, on-device learning allows models to adapt to user-specific patterns and local data without sending sensitive information to the cloud.",
            },
            {
                type: "paragraph",
                content:
                    "We have developed memory-efficient training algorithms that enable on-device learning with limited resources. These algorithms use techniques such as gradient compression, selective layer updates, and low-rank approximations to reduce the memory and computational requirements of training.",
            },
            {
                type: "quote",
                content:
                    "The future of AI is not just about deploying models to the edge, but also about learning at the edge.",
            },
            {
                type: "heading",
                content: "Applications and Case Studies",
            },
            {
                type: "subheading",
                content: "Smart Camera Image Recognition",
            },
            {
                type: "paragraph",
                content:
                    "We applied our optimization techniques to develop an efficient image recognition system for smart security cameras. The system can detect and classify objects in real-time while running entirely on a low-power camera module with limited computational resources.",
            },
            {
                type: "list",
                content: "Key results from this application included:",
                items: [
                    "Real-time object detection at 15 FPS on a 500MHz ARM Cortex-A53 processor",
                    "5x reduction in model size compared to the baseline model",
                    "90% reduction in energy consumption",
                    "Less than 2% drop in detection accuracy",
                ],
            },
            {
                type: "subheading",
                content: "Mobile Health Monitoring",
            },
            {
                type: "paragraph",
                content:
                    "Another application of our research is in mobile health monitoring, where we developed optimized neural networks for analyzing sensor data from wearable devices. These networks can detect anomalies and classify activities while running continuously on low-power microcontrollers.",
            },
            {
                type: "paragraph",
                content:
                    "Our on-device learning approach allows the models to adapt to individual users over time, improving accuracy and personalization without compromising privacy by sending sensitive health data to the cloud.",
            },
            {
                type: "heading",
                content: "Future Directions",
            },
            {
                type: "paragraph",
                content:
                    "Our ongoing research in machine learning optimization for edge devices is exploring several promising directions:",
            },
            {
                type: "list",
                content: "Current research directions include:",
                items: [
                    "Hardware-software co-design for ML acceleration",
                    "Neuromorphic computing approaches for ultra-low-power ML",
                    "Federated learning techniques for collaborative edge learning",
                    "Automated deployment and optimization pipelines for edge ML",
                    "Specialized optimizations for emerging edge applications such as augmented reality and autonomous systems",
                ],
            },
            {
                type: "paragraph",
                content:
                    "As edge devices continue to evolve and new hardware accelerators emerge, we expect to see increasing opportunities for deploying sophisticated ML models at the edge. Our goal is to develop optimization techniques that can keep pace with these hardware advances and enable new applications that were previously infeasible.",
            },
            {
                type: "heading",
                content: "Conclusion",
            },
            {
                type: "paragraph",
                content:
                    "The Machine Learning Optimization project addresses the critical challenge of deploying sophisticated neural networks to resource-constrained edge devices. By developing comprehensive optimization techniques spanning architecture design, training procedures, and deployment strategies, we are helping to bridge the gap between the capabilities of state-of-the-art ML models and the constraints of edge hardware.",
            },
            {
                type: "paragraph",
                content:
                    "As AI continues to move from the cloud to the edge, these optimization techniques will be essential for enabling new applications in areas such as IoT, wearable devices, smart homes, and autonomous systems. Our research aims to make efficient edge AI accessible to a wider range of devices and use cases, ultimately bringing the benefits of machine learning to more aspects of our daily lives.",
            },
        ],
        team: [
            {
                name: "Dr. Emily Chen",
                role: "Principal Investigator",
                avatar: "/placeholder.svg?height=100&width=100",
                bio: "Expert in efficient deep learning and embedded systems",
            },
            {
                name: "Dr. David Kim",
                role: "Senior Researcher",
                avatar: "/placeholder.svg?height=100&width=100",
                bio: "Specializes in model compression and quantization",
            },
            {
                name: "Priya Patel",
                role: "PhD Candidate",
                avatar: "/placeholder.svg?height=100&width=100",
                bio: "Researching neural architecture search for edge devices",
            },
        ],
        publications: [
            {
                title: "Hardware-Aware Neural Architecture Search for Edge Devices",
                authors: "E. Chen, P. Patel, D. Kim",
                conference: "Conference on Computer Vision and Pattern Recognition (CVPR)",
                year: "2023",
                link: "#",
                abstract:
                    "This paper presents a hardware-aware neural architecture search framework that automatically designs efficient neural networks for specific edge devices.",
            },
            {
                title: "Adaptive Quantization for Efficient Edge Deployment",
                authors: "D. Kim, E. Chen, J. Smith",
                conference: "International Conference on Machine Learning (ICML)",
                year: "2022",
                link: "#",
                abstract:
                    "We introduce an adaptive quantization technique that applies different precision levels to different parts of a neural network based on sensitivity analysis.",
            },
        ],
        relatedProjects: ["1", "4"],
    },
    {
        id: "4",
        slug: "privacy-preserving-federated-learning",
        title: "Privacy-Preserving Federated Learning",
        description:
            "Methods for collaborative machine learning without sharing sensitive data, using federated learning and differential privacy.",
        image: "/placeholder.svg?height=400&width=800",
        tags: ["Privacy", "Federated Learning", "Security"],
        content: [
            {
                type: "paragraph",
                content:
                    "The Privacy-Preserving Federated Learning project focuses on developing methods for collaborative machine learning that protect the privacy of sensitive data. Traditional machine learning approaches require centralizing data from multiple sources, which raises significant privacy concerns in domains like healthcare, finance, and personal devices. Our research explores federated learning combined with privacy-enhancing technologies to enable collaborative model training without sharing raw data.",
            },
            {
                type: "heading",
                content: "Project Overview",
            },
            {
                type: "paragraph",
                content:
                    "Federated learning is a machine learning approach where multiple participants (devices, organizations, etc.) collaboratively train a shared model while keeping their data local. Instead of sharing raw data, participants train the model locally and share only model updates. While this approach inherently provides some privacy benefits, it is not sufficient for truly sensitive data, as model updates can still leak information about the underlying data.",
            },
            {
                type: "paragraph",
                content:
                    "Our research enhances federated learning with additional privacy-preserving techniques such as differential privacy, secure multi-party computation, and homomorphic encryption. We aim to develop practical methods that provide strong privacy guarantees while maintaining model accuracy and system efficiency.",
            },
            {
                type: "image",
                content: "/placeholder.svg?height=400&width=800",
                caption: "Overview of our privacy-preserving federated learning framework",
                alt: "Diagram of federated learning with privacy enhancements",
            },
            {
                type: "heading",
                content: "Key Innovations",
            },
            {
                type: "subheading",
                content: "Adaptive Differential Privacy",
            },
            {
                type: "paragraph",
                content:
                    "Differential privacy provides formal privacy guarantees by adding calibrated noise to data or computations. However, applying the same level of noise to all participants and all training rounds can be inefficient. We have developed an adaptive differential privacy approach that dynamically adjusts the noise level based on factors such as data sensitivity, training progress, and participant characteristics.",
            },
            {
                type: "code",
                content:
                    "# Example of our adaptive differential privacy in federated learning\nfrom privacy_federated import AdaptiveDPFedAvg\n\n# Initialize the federated learning framework with adaptive DP\nfl = AdaptiveDPFedAvg(\n    model=base_model,\n    initial_epsilon=8.0,  # Initial privacy budget\n    min_epsilon=0.5,     # Minimum privacy budget\n    adaptive_strategy='sensitivity_based',\n    sensitivity_analyzer=SensitivityAnalyzer()\n)\n\n# Define client data sources (without sharing raw data)\nclients = [\n    Client(dataset=client1_data, id='client1'),\n    Client(dataset=client2_data, id='client2'),\n    # More clients...\n]\n\n# Run federated training\nfinal_model, privacy_report = fl.train(\n    clients=clients,\n    rounds=100,\n    clients_per_round=10,\n    local_epochs=5\n)\n\n# The privacy_report contains the final privacy guarantees\nprint(f\"Final epsilon: {privacy_report['final_epsilon']}\")\nprint(f\"Privacy guarantees per client: {privacy_report['client_guarantees']}\")",
                language: "python",
            },
            {
                type: "paragraph",
                content:
                    "Our adaptive approach achieves up to 30% better accuracy-privacy trade-offs compared to static differential privacy methods, making privacy-preserving federated learning more practical for real-world applications.",
            },
            {
                type: "subheading",
                content: "Secure Aggregation with Dropout Resilience",
            },
            {
                type: "paragraph",
                content:
                    "Secure aggregation allows model updates from multiple participants to be combined without revealing individual updates. However, traditional secure aggregation protocols are vulnerable to participant dropouts, which are common in federated learning due to network issues or device constraints.",
            },
            {
                type: "paragraph",
                content:
                    "We have developed a dropout-resilient secure aggregation protocol that can complete the aggregation even if some participants disconnect during the process. Our protocol uses threshold cryptography and secret sharing techniques to ensure that the aggregation can proceed as long as a minimum number of participants remain available.",
            },
            {
                type: "quote",
                content:
                    "Privacy should not come at the expense of robustness. A privacy-preserving system must be able to handle real-world challenges like participant dropouts and network failures.",
            },
            {
                type: "subheading",
                content: "Heterogeneous Privacy Requirements",
            },
            {
                type: "paragraph",
                content:
                    "Different participants in federated learning may have different privacy requirements based on their data sensitivity and regulatory constraints. We have developed a framework that supports heterogeneous privacy requirements, allowing each participant to specify their own privacy parameters while still contributing to the shared model.",
            },
            {
                type: "image",
                content: "/placeholder.svg?height=400&width=800",
                caption: "Visualization of heterogeneous privacy levels across participants",
                alt: "Chart showing different privacy levels",
            },
            {
                type: "heading",
                content: "Applications and Case Studies",
            },
            {
                type: "subheading",
                content: "Healthcare Predictive Analytics",
            },
            {
                type: "paragraph",
                content:
                    "We applied our privacy-preserving federated learning framework to develop predictive models for patient outcomes across multiple healthcare institutions. Each institution was able to contribute to the shared model without sharing sensitive patient data, while maintaining compliance with privacy regulations like HIPAA.",
            },
            {
                type: "list",
                content: "Key results from this application included:",
                items: [
                    "Successful collaboration between 5 healthcare institutions without sharing patient data",
                    "Predictive model performance within 5% of a centralized model trained on pooled data",
                    "Formal differential privacy guarantees with epsilon < 3",
                    "Compliance with institutional review boards and privacy regulations",
                ],
            },
            {
                type: "subheading",
                content: "Mobile Keyboard Prediction",
            },
            {
                type: "paragraph",
                content:
                    "Another application of our research is in developing next-word prediction models for mobile keyboards. These models need to adapt to individual typing patterns while protecting the privacy of sensitive text input. Our framework enables on-device learning combined with privacy-preserving federated updates to improve the global model.",
            },
            {
                type: "paragraph",
                content:
                    "This application demonstrates the potential of privacy-preserving federated learning for personalized models that handle highly sensitive data, providing both utility and strong privacy guarantees.",
            },
            {
                type: "heading",
                content: "Future Directions",
            },
            {
                type: "paragraph",
                content:
                    "Our ongoing research in privacy-preserving federated learning is exploring several promising directions:",
            },
            {
                type: "list",
                content: "Current research directions include:",
                items: [
                    "Vertical federated learning with privacy guarantees for cross-silo applications",
                    "Integration with trusted execution environments for enhanced security",
                    "Privacy-preserving techniques for federated reinforcement learning",
                    "Theoretical analysis of privacy leakage in federated learning systems",
                    "Regulatory compliance frameworks for privacy-preserving collaborative ML",
                ],
            },
            {
                type: "paragraph",
                content:
                    "As privacy concerns continue to grow and regulations like GDPR and CCPA become more stringent, we expect privacy-preserving federated learning to become increasingly important for machine learning applications that involve sensitive data. Our goal is to develop methods that make privacy protection a standard part of the machine learning workflow rather than an afterthought.",
            },
            {
                type: "heading",
                content: "Conclusion",
            },
            {
                type: "paragraph",
                content:
                    "The Privacy-Preserving Federated Learning project addresses the critical challenge of enabling collaborative machine learning while protecting sensitive data. By combining federated learning with advanced privacy-enhancing technologies, we are creating a framework that allows organizations and individuals to benefit from shared models without compromising privacy.",
            },
            {
                type: "paragraph",
                content:
                    "As AI systems become more integrated into privacy-sensitive domains like healthcare, finance, and personal devices, the need for privacy-preserving machine learning approaches will only grow. Our research aims to ensure that privacy protection and machine learning can advance together, enabling innovative applications while respecting fundamental privacy rights.",
            },
        ],
        team: [
            {
                name: "Dr. Sophia Lee",
                role: "Principal Investigator",
                avatar: "/placeholder.svg?height=100&width=100",
                bio: "Expert in privacy-preserving machine learning and cryptography",
            },
            {
                name: "Dr. James Wilson",
                role: "Senior Researcher",
                avatar: "/placeholder.svg?height=100&width=100",
                bio: "Specializes in differential privacy and federated learning",
            },
            {
                name: "Carlos Rodriguez",
                role: "PhD Candidate",
                avatar: "/placeholder.svg?height=100&width=100",
                bio: "Researching secure aggregation protocols for federated learning",
            },
        ],
        publications: [
            {
                title: "Adaptive Differential Privacy for Federated Learning",
                authors: "S. Lee, J. Wilson, C. Rodriguez",
                conference: "Privacy Enhancing Technologies Symposium (PETS)",
                year: "2023",
                link: "#",
                abstract:
                    "This paper presents an adaptive differential privacy approach for federated learning that dynamically adjusts privacy parameters based on data sensitivity and training progress.",
            },
            {
                title: "Dropout-Resilient Secure Aggregation for Federated Learning",
                authors: "C. Rodriguez, S. Lee, A. Johnson",
                conference: "ACM Conference on Computer and Communications Security (CCS)",
                year: "2022",
                link: "#",
                abstract:
                    "We introduce a secure aggregation protocol for federated learning that can complete the aggregation process even when participants drop out during the protocol execution.",
            },
        ],
        relatedProjects: ["1", "3"],
    },
]

export function getResearchProjectBySlug(slug: string): ResearchProject | undefined {
    return researchProjects.find((project) => project.slug === slug)
}

export function getRelatedResearchProjects(projectIds: string[]): ResearchProject[] {
    return researchProjects.filter((project) => projectIds.includes(project.id))
}
