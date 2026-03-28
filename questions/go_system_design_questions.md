Based on system design in Go, here are more than 100 questions following the TOON format.

🏗️ TOPIC: SYSTEM DESIGN FUNDAMENTALS
1. What is system design in software engineering?
A) User interface design
B) Design of scalable and reliable system architecture
C) Database design only
D) Isolated algorithm design
Resposta: B

2. What is the main objective of system design?
A) Creating beautiful code
B) Building systems that meet functional and non-functional requirements
C) Optimizing for single user
D) Minimizing lines of code
Resposta: B

3. Non-functional requirements include:
A) Performance, scalability, reliability
B) Only user functionalities
C) Only interface design
D) Only unit tests
Resposta: A

4. Trade-offs in system design refer to:
A) Balancing different conflicting requirements
B) Always choosing the most expensive option
C) Ignoring business constraints
D) Optimizing only for performance
Resposta: A

5. What is the difference between vertical and horizontal scalability?
A) Vertical increases resources, horizontal adds machines
B) Vertical is cheaper
C) Horizontal is simpler
D) No difference
Resposta: A

📊 TOPIC: SCALABILITY AND PERFORMANCE
6. What is horizontal scalability?
A) Adding more machines to the system
B) Increasing resources of the same machine
C) Optimizing algorithms
D) Reducing number of users
Resposta: A

7. Load balancing is used for:
A) Distributing traffic across multiple servers
B) Increasing CPU of one server
C) Reducing memory usage
D) Optimizing database
Resposta: A

8. Caching helps with:
A) Reducing latency and backend load
B) Increasing storage
C) Improving security
D) Simplifying code
Resposta: A

9. CDN (Content Delivery Network) is used for:
A) Geographic content distribution
B) Only for video streaming
C) Only for images
D) Only for APIs
Resposta: A

10. Database sharding is:
A) Horizontal data division
B) Only for NoSQL
C) Increasing backup
D) Reducing security
Resposta: A

🔄 TOPIC: CONCURRENCY AND CONSISTENCY
11. What is eventual consistency?
A) System eventually reaches consistency
B) Immediate consistency always
C) Only for relational databases
D) Doesn't exist in distributed systems
Resposta: A

12. CAP theorem states that distributed systems can have:
A) Only 2 of 3: Consistency, Availability, Partition tolerance
B) All 3 simultaneously
C) Only consistency
D) Only availability
Resposta: A

13. Two-phase commit is used for:
A) Atomic distributed transactions
B) Only for local databases
C) Optimizing performance
D) Reducing complexity
Resposta: A

14. Quorum in distributed systems guarantees:
A) Majority agrees on operations
B) All always agree
C) Only leader decides
D) No guarantees
Resposta: A

15. Raft consensus algorithm is used for:
A) Leader election in distributed systems
B) Only for databases
C) Only for cache
D) Only for APIs
Resposta: A

🔒 TOPIC: SECURITY AND AUTHENTICATION
16. OAuth 2.0 is used for:
A) Delegated authorization
B) Only for local login
C) Only for passwords
D) Only for internal APIs
Resposta: A

17. JWT (JSON Web Token) is used for:
A) Stateless authentication
B) Only for session management
C) Only for passwords
D) Only for encryption
Resposta: A

18. Rate limiting helps with:
A) Preventing abuse and DoS attacks
B) Increasing performance
C) Reducing costs
D) Simplifying code
Resposta: A

19. API keys are used for:
A) Authenticating and authorizing API calls
B) Only for end users
C) Only for admin
D) Only for debugging
Resposta: A

20. HTTPS guarantees:
A) Encryption in transit
B) Only for APIs
C) Only for websites
D) Only for databases
Resposta: A

📡 TOPIC: COMMUNICATION AND MESSAGING
21. Message queues are used for:
A) Asynchronous communication between services
B) Only for email
C) Only for SMS
D) Only for notifications
Resposta: A

22. Pub/Sub pattern is useful for:
A) Decoupling producers and consumers
B) Only for streaming
C) Only for batch processing
D) Only for real-time
Resposta: A

23. WebSockets allow:
A) Bidirectional real-time communication
B) Only for HTTP
C) Only for HTTPS
D) Only for REST APIs
Resposta: A

24. gRPC is based on:
A) Protocol Buffers and HTTP/2
B) Only JSON
C) Only XML
D) Only HTTP/1.1
Resposta: A

25. Event-driven architecture uses:
A) Events for communication between services
B) Only for databases
C) Only for APIs
D) Only for UI
Resposta: A

🗄️ TOPIC: DATA STORAGE AND PERSISTENCE
26. SQL vs NoSQL: NoSQL is better for:
A) Unstructured data and horizontal scalability
B) Only for ACID transactions
C) Only for relational data
D) Only for small volumes
Resposta: A

27. Database indexing helps with:
A) Query performance
B) Increasing storage
C) Reducing security
D) Simplifying backups
Resposta: A

28. Read replicas are used for:
A) Scaling database reads
B) Only for writes
C) Only for backups
D) Only for development
Resposta: A

29. Time-series databases are optimized for:
A) Timestamped data
B) Only for text
C) Only for images
D) Only for documents
Resposta: A

30. Data lakes are used for:
A) Storing large volumes of raw data
B) Only for structured data
C) Only for transactions
D) Only for cache
Resposta: A

🔍 TOPIC: MONITORING AND OBSERVABILITY
31. What is observability in systems?
A) Ability to understand internal behavior through external data
B) Only for logs
C) Only for metrics
D) Only for tracing
Resposta: A

32. Structured logs are better because:
A) They facilitate parsing and analysis
B) They use less space
C) They are faster
D) They are simpler
Resposta: A

33. Metrics vs logs: metrics are:
A) Numerical data aggregated over time
B) Only for errors
C) Only for debugging
D) Only for performance
Resposta: A

34. Distributed tracing helps with:
A) Tracking requests across multiple services
B) Only for one service
C) Only for databases
D) Only for APIs
Resposta: A

35. SLA (Service Level Agreement) defines:
A) Expected service levels
B) Only for uptime
C) Only for performance
D) Only for security
Resposta: A

🚀 TOPIC: MICROSERVICES AND DISTRIBUTED SYSTEMS
36. Microservices architecture is characterized by:
A) Small and independent services
B) Single monolith
C) Only for APIs
D) Only for databases
Resposta: A

37. Service discovery is necessary for:
A) Finding dynamic service endpoints
B) Only for static IPs
C) Only for development
D) Only for testing
Resposta: A

38. API Gateway is used for:
A) Managing routing and cross-cutting concerns
B) Only for load balancing
C) Only for authentication
D) Only for logging
Resposta: A

39. Circuit breaker pattern in microservices:
A) Prevents cascade failures
B) Increases performance
C) Reduces costs
D) Simplifies code
Resposta: A

40. Sidecar pattern is used for:
A) Adding functionality without modifying main application
B) Only for logging
C) Only for monitoring
D) Only for security
Resposta: A

🌐 TOPIC: NETWORKING AND PROTOCOLS
41. TCP vs UDP: TCP guarantees:
A) Ordered and reliable delivery
B) Only speed
C) Only low latency
D) Only for streaming
Resposta: A

42. HTTP/2 improves over HTTP/1.1 with:
A) Multiplexing and server push
B) Only for HTTPS
C) Only for APIs
D) Only for browsers
Resposta: A

43. DNS resolution is used for:
A) Converting domain names to IPs
B) Only for emails
C) Only for websites
D) Only for APIs
Resposta: A

44. Load balancing algorithms include:
A) Round robin, least connections, IP hash
B) Only random
C) Only sequential
D) Only manual
Resposta: A

45. CDN edge locations help with:
A) Reducing latency for global users
B) Only for streaming
C) Only for downloads
D) Only for APIs
Resposta: A

🔧 TOPIC: DEPLOYMENT AND CI/CD
46. Blue-green deployment is:
A) Maintaining two versions in production and switching traffic
B) Only for development
C) Only for testing
D) Only for rollback
Resposta: A

47. Canary releases test:
A) New versions with small traffic percentage
B) Only in staging
C) Only with internal users
D) Only after full release
Resposta: A

48. Containers (Docker) help with:
A) Consistency between environments
B) Only for development
C) Only for production
D) Only for testing
Resposta: A

49. Kubernetes orchestrates:
A) Containers at scale
B) Only VMs
C) Only bare metal
D) Only physical servers
Resposta: A

50. Infrastructure as Code (IaC) is:
A) Managing infrastructure with code
B) Only for cloud
C) Only for on-premise
D) Only for containers
Resposta: A

💾 TOPIC: CACHING AND OPTIMIZATION
51. Cache invalidation strategies include:
A) TTL, write-through, write-behind
B) Only manual
C) Only automatic
D) Only by time
Resposta: A

52. Redis is often used for:
A) Distributed cache and message broker
B) Only for session storage
C) Only for pub/sub
D) Only for lists
Resposta: A

53. Browser caching uses:
A) Headers like Cache-Control and ETag
B) Only for images
C) Only for CSS
D) Only for JavaScript
Resposta: A

54. Application layer caching is:
A) Application-level cache
B) Only database cache
C) Only browser cache
D) Only CDN cache
Resposta: A

55. Cache warming is:
A) Pre-filling cache with anticipated data
B) Only for cold start
C) Only for production
D) Only for development
Resposta: A

🔐 TOPIC: ADVANCED SECURITY
56. Zero Trust security model assumes:
A) No network is trusted by default
B) Only external networks are untrusted
C) Only internal networks are trusted
D) Only cloud is untrusted
Resposta: A

57. WAF (Web Application Firewall) protects against:
A) Application-level web attacks
B) Only for DDoS
C) Only for SQL injection
D) Only for XSS
Resposta: A

58. Secret management is important for:
A) Managing keys and credentials securely
B) Only for passwords
C) Only for API keys
D) Only for certificates
Resposta: A

59. Rate limiting algorithms include:
A) Token bucket, sliding window, fixed window
B) Only by IP
C) Only by user
D) Only by endpoint
Resposta: A

60. DDoS mitigation strategies include:
A) Rate limiting, blackholing, anycast
B) Only firewall
C) Only blocking IPs
D) Only increasing capacity
Resposta: A

📊 TOPIC: ANALYTICS AND DATA PROCESSING
61. Stream processing is used for:
A) Real-time data processing
B) Only for batch processing
C) Only for historical data
D) Only for reports
Resposta: A

62. Batch processing is characterized by:
A) Processing data in batches
B) Only for real-time
C) Only for streaming
D) Only for interactive queries
Resposta: A

63. Data warehouse is optimized for:
A) Analysis and reporting
B) Only for transactions
C) Only for real-time
D) Only for operational data
Resposta: A

64. ETL (Extract, Transform, Load) is used for:
A) Moving data between systems
B) Only for backup
C) Only for replication
D) Only for synchronization
Resposta: A

65. Lambda architecture combines:
A) Batch and stream processing
B) Only batch
C) Only stream
D) Only real-time
Resposta: A

🌍 TOPIC: GLOBAL AND MULTI-REGION
66. Multi-region deployment helps with:
A) Redundancy and latency reduction
B) Only for backup
C) Only for disaster recovery
D) Only for compliance
Resposta: A

67. GeoDNS routes users to:
A) Nearest region
B) Only for US
C) Only for Europe
D) Only for Asia
Resposta: A

68. Data residency requirements require:
A) Data to remain in certain regions
B) Only for GDPR
C) Only for HIPAA
D) Only for PCI
Resposta: A

69. Cross-region replication is used for:
A) Disaster recovery and read locality
B) Only for backup
C) Only for migration
D) Only for testing
Resposta: A

70. Global load balancing distributes:
A) Traffic between regions
B) Only within one region
C) Only for data centers
D) Only for APIs
Resposta: A

🔧 TOPIC: SPECIFIC SYSTEM DESIGNS
71. URL shortener design considers:
A) Unique ID generation and fast redirection
B) Only for security
C) Only for analytics
D) Only for branding
Resposta: A

72. Push notification system needs:
A) Scalability and reliable delivery
B) Only for iOS
C) Only for Android
D) Only for web
Resposta: A

73. Chat system design considers:
A) Real-time messaging and persistence
B) Only for text
C) Only for voice
D) Only for video
Resposta: A

74. File upload system deals with:
A) Distributed storage and asynchronous processing
B) Only for images
C) Only for documents
D) Only for videos
Resposta: A

75. Search system design includes:
A) Indexing and query processing
B) Only for full-text
C) Only for structured data
D) Only for autocomplete
Resposta: A

📱 TOPIC: MOBILE AND CLIENT-SIDE
76. Offline-first design considers:
A) Functionality without connection
B) Only for web
C) Only for mobile
D) Only for desktop
Resposta: A

77. Sync conflicts are resolved with:
A) Operational transformation or CRDTs
B) Only manual resolution
C) Only last-writer-wins
D) Only first-writer-wins
Resposta: A

78. Mobile app backend considers:
A) Push notifications and data sync
B) Only for authentication
C) Only for APIs
D) Only for databases
Resposta: A

79. Progressive Web Apps (PWAs) offer:
A) Mobile-like experience on web
B) Only for desktop
C) Only for iOS
D) Only for Android
Resposta: A

80. Client-side caching reduces:
A) Server load and latency
B) Only for bandwidth
C) Only for CPU
D) Only for memory
Resposta: A

🎯 TOPIC: PERFORMANCE AND OPTIMIZATION
81. Database connection pooling improves:
A) Connection reuse and performance
B) Only for security
C) Only for backup
D) Only for replication
Resposta: A

82. Query optimization includes:
A) Indexes and execution plans
B) Only for caching
C) Only for sharding
D) Only for replication
Resposta: A

83. Lazy loading loads:
A) Data only when needed
B) Everything at start
C) Only for mobile
D) Only for web
Resposta: A

84. Pagination is used for:
A) Limiting amount of returned data
B) Only for mobile
C) Only for web
D) Only for APIs
Resposta: A

85. Compression reduces:
A) Data size and bandwidth
B) Only for images
C) Only for text
D) Only for video
Resposta: A

🔍 TOPIC: DEBUGGING AND TROUBLESHOOTING
86. Distributed logging centralizes:
A) Logs from multiple services
B) Only for one service
C) Only for errors
D) Only for performance
Resposta: A

87. Health checks verify:
A) Service status and dependencies
B) Only for APIs
B) Only for databases
C) Only for cache
Resposta: A

88. Post-mortem analysis focuses on:
A) Root cause of incidents
B) Only on blaming individuals
C) Only on metrics
D) Only on logs
Resposta: A

89. Debugging in distributed systems requires:
A) Correlated tracing and logging
B) Only breakpoints
C) Only print statements
D) Only unit tests
Resposta: A

90. Error budgeting defines:
A) Acceptable planned failures
B) Only for uptime
C) Only for performance
D) Only for costs
Resposta: A

🏗️ TOPIC: ARCHITECTURE AND PATTERNS
91. Event sourcing stores:
A) Sequence of events as state
B) Only current state
C) Only snapshots
D) Only for backup
Resposta: A

92. CQRS (Command Query Responsibility Segregation) separates:
A) Write and read operations
B) Only by user
C) Only by service
D) Only by region
Resposta: A

93. Saga pattern manages:
A) Distributed transactions with compensation
B) Only for ACID
C) Only for rollback
D) Only for commit
Resposta: A

94. Backend for Frontend (BFF) creates:
A) Specific APIs for each frontend
B) Only one generic API
C) Only for mobile
D) Only for web
Resposta: A

95. Strangler fig pattern migrates:
A) Monoliths to microservices gradually
B) Only for complete rewrite
C) Only for new code
D) Only for legacy systems
Resposta: A

🌐 TOPIC: PROTOCOLS AND STANDARDS
96. RESTful APIs follow:
A) HTTP principles and stateless
B) Only for JSON
C) Only for XML
D) Only for SOAP
Resposta: A

97. GraphQL allows:
A) Flexible queries and efficient data fetching
B) Only for fixed endpoints
C) Only for REST
D) Only for SOAP
Resposta: A

98. Webhook is used for:
A) HTTP callbacks for events
B) Only for polling
C) Only for real-time
D) Only for streaming
Resposta: A

99. Message format standards include:
A) JSON, Protocol Buffers, Avro
B) Only XML
C) Only CSV
D) Only YAML
Resposta: A

100. API versioning strategies include:
A) URL versioning, header versioning, content negotiation
B) Only breaking changes
C) Only backward compatibility
D) Only deprecation
Resposta: A

🚀 TOPIC: FUTURE AND TRENDS
101. Serverless architecture eliminates:
A) Server management
B) Only for functions
C) Only for APIs
D) Only for databases
Resposta: A

102. Edge computing processes:
A) Data close to source
B) Only in cloud
C) Only in data centers
D) Only on servers
Resposta: A

103. AI/ML inference in system design considers:
A) Model serving and latency
B) Only for training
C) Only for data collection
D) Only for preprocessing
Resposta: A

104. Blockchain in system design is used for:
A) Immutability and decentralization
B) Only for cryptocurrency
C) Only for smart contracts
D) Only for transactions
Resposta: A

105. Quantum computing will impact:
A) Cryptography and complex algorithms
B) Only for databases
C) Only for APIs
D) Only for web
Resposta: A

🎯 TOPIC: BONUS - GO SPECIFIC
106. Go is good for system design because:
A) Native concurrency and performance
B) Only for web
C) Only for CLI
D) Only for microservices
Resposta: A

107. Goroutines are useful for:
A) Lightweight and efficient concurrency
B) Only for threading
B) Only for parallel processing
C) Only for async operations
Resposta: A

108. Channels in Go facilitate:
A) Safe communication between goroutines
B) Only for mutexes
C) Only for shared memory
D) Only for locks
Resposta: A

109. Context package in Go manages:
A) Deadlines, cancellation, and request-scoped values
B) Only for logging
C) Only for tracing
D) Only for metrics
Resposta: A

110. Go interfaces help with:
A) Decoupling and testability
B) Only for performance
C) Only for memory
D) Only for concurrency
Resposta: A

111. Go's standard library for system design includes:
A) net/http, database/sql, encoding/json
B) Only for web
C) Only for databases
D) Only for networking
Resposta: A

112. Go profiling tools help with:
A) Performance analysis and optimization
B) Only for debugging
C) Only for testing
D) Only for benchmarking
Resposta: A

113. Go's garbage collector is:
A) Low-latency and concurrent
B) Only for small applications
C) Only for large systems
D) Only for servers
Resposta: A

114. Go's static typing helps with:
A) Compile-time error detection
B) Only for performance
C) Only for runtime
D) Only for development
Resposta: A

115. Go's cross-compilation facilitates:
A) Deploying to multiple architectures
B) Only for Linux
C) Only for Windows
D) Only for macOS
Resposta: A

🔧 TOPIC: PRACTICAL IMPLEMENTATION
116. Rate limiting in Go can use:
A) Token bucket algorithm with time.Ticker
B) Only for mutexes
C) Only for channels
D) Only for atomic counters
Resposta: A

117. Connection pooling in Go uses:
A) sync.Pool or custom implementation
B) Only for goroutines
C) Only for channels
D) Only for interfaces
Resposta: A

118. Graceful shutdown in Go requires:
A) Signal handling and context cancellation
B) Only for SIGKILL
C) Only for SIGTERM
D) Only for SIGINT
Resposta: A

119. Middleware in Go web servers implements:
A) Cross-cutting concerns like logging and auth
B) Only for routing
C) Only for handlers
D) Only for responses
Resposta: A

120. Configuration management in Go uses:
A) Viper, environment variables, config files
B) Only for hardcoded values
C) Only for constants
D) Only for flags
Resposta: A

📊 TOPIC: MONITORING IN GO
121. Prometheus metrics in Go use:
A) Client library to expose metrics
B) Only for counters
C) Only for gauges
D) Only for histograms
Resposta: A

122. Structured logging in Go can use:
A) Logrus, zap, or slog package
B) Only for fmt.Println
C) Only for log package
D) Only for custom solutions
Resposta: A

123. Distributed tracing in Go integrates with:
A) Jaeger, Zipkin, or OpenTelemetry
B) Only for Prometheus
C) Only for Grafana
D) Only for ELK stack
Resposta: A

124. Health checks in Go return:
A) HTTP status and dependency status
B) Only for 200 OK
C) Only for errors
D) Only for timeouts
Resposta: A

125. Performance profiling in Go uses:
A) pprof for CPU and memory analysis
B) Only for benchmarks
C) Only for tests
D) Only for monitoring
Resposta: A

🚀 TOPIC: DEPLOYMENT IN GO
126. Containerization of Go applications uses:
A) Multi-stage builds to optimize size
B) Only for scratch images
C) Only for alpine
D) Only for ubuntu
Resposta: A

127. Kubernetes deployments for Go define:
A) Deployments, Services, and ConfigMaps
B) Only for Pods
C) Only for Nodes
D) Only for Clusters
Resposta: A

128. CI/CD for Go applications includes:
A) Test automation, building, and deployment
B) Only for testing
C) Only for building
D) Only for deployment
Resposta: A

129. Blue-green deployment in Go requires:
A) Load balancer and health checks
B) Only for containers
B) Only for VMs
C) Only for servers
Resposta: A

130. Canary analysis in Go monitors:
A) Metrics and errors during rollout
B) Only for performance
C) Only for availability
D) Only for latency
Resposta: A

🔐 TOPIC: SECURITY IN GO
131. JWT validation in Go uses:
A) Libraries like go-jwt or auth0
B) Only for manual parsing
C) Only for HMAC
D) Only for RSA
Resposta: A

132. Input validation in Go can use:
A) Validator libraries or custom validation
B) Only for type checking
C) Only for length checks
D) Only for format validation
Resposta: A

133. SQL injection prevention in Go uses:
A) Prepared statements and parameterized queries
B) Only for string concatenation
C) Only for escaping
D) Only for sanitization
Resposta: A

134. CORS handling in Go uses:
A) Specific headers and middleware
B) Only for same-origin
C) Only for preflight
D) Only for credentials
Resposta: A

135. Secret management in Go integrates with:
A) Vault, AWS Secrets Manager, or Kubernetes secrets
B) Only for environment variables
C) Only for config files
D) Only for hardcoded values
Resposta: A

📈 TOPIC: SCALABILITY IN GO
136. Horizontal scaling in Go uses:
A) Multiple instances with load balancer
B) Only for goroutines
C) Only for channels
D) Only for single instance
Resposta: A

137. Worker pools in Go implement:
A) Controlled concurrency with goroutines
B) Only for single worker
C) Only for unlimited goroutines
D) Only for sequential processing
Resposta: A

138. Fan-out pattern in Go distributes:
A) Work to multiple goroutines
B) Only for one worker
C) Only for sequential
D) Only for single thread
Resposta: A

139. Fan-in pattern in Go aggregates:
A) Results from multiple goroutines
B) Only for single result
C) Only for sequential
D) Only for ordered results
Resposta: A

140. Backpressure handling in Go uses:
A) Buffered channels and context cancellation
B) Only for dropping messages
C) Only for blocking
D) Only for ignoring
Resposta: A

🗄️ TOPIC: DATA IN GO
141. Database drivers in Go implement:
A) database/sql standard interface
B) Only for MySQL
C) Only for PostgreSQL
D) Only for MongoDB
Resposta: A

142. ORM in Go can use:
A) GORM, Ent, or sqlx
B) Only for manual queries
C) Only for raw SQL
D) Only for NoSQL
Resposta: A

143. Cache client in Go integrates with:
A) Redis, Memcached, or custom implementation
B) Only for memory cache
C) Only for disk cache
D) Only for distributed cache
Resposta: A

144. Message queue clients in Go support:
A) Kafka, RabbitMQ, or NATS
B) Only for Redis pub/sub
C) Only for SQS
D) Only for Google Pub/Sub
Resposta: A

145. Search integration in Go uses:
A) Elasticsearch clients or search libraries
B) Only for database search
C) Only for full-text
D) Only for structured queries
Resposta: A

🔍 TOPIC: TESTING IN GO
146. Load testing in Go uses:
A) Vegeta or custom load generators
B) Only for unit tests
C) Only for integration tests
D) Only for benchmarks
Resposta: A

147. Integration testing in Go requires:
A) Testcontainers or real mocks
B) Only for unit tests
C) Only for mocks
D) Only for stubs
Resposta: A

148. Contract testing in Go verifies:
A) Compatibility between services
B) Only for APIs
C) Only for databases
D) Only for messages
Resposta: A

149. Chaos engineering in Go tests:
A) Resilience with controlled failures
B) Only for happy path
C) Only for errors
D) Only for timeouts
Resposta: A

150. Property-based testing in Go uses:
A) Gomel or similar libraries
B) Only for example-based tests
C) Only for unit tests
D) Only for integration tests
Resposta: A
