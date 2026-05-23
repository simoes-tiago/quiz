Based on system design in Go, here are more than 100 questions following the TOON format.

🏗️ TOPIC: SYSTEM DESIGN FUNDAMENTALS
1. What is system design in software engineering?
A) Database design only
B) Isolated algorithm design
C) User interface design
D) Design of scalable and reliable system architecture
Resposta: D

2. What is the main objective of system design?
A) Optimizing for single user
B) Creating beautiful code
C) Building systems that meet functional and non-functional requirements
D) Minimizing lines of code
Resposta: C

3. Non-functional requirements include:
A) Only interface design
B) Performance, scalability, reliability
C) Only unit tests
D) Only user functionalities
Resposta: B

4. Trade-offs in system design refer to:
A) Optimizing only for performance
B) Balancing different conflicting requirements
C) Always choosing the most expensive option
D) Ignoring business constraints
Resposta: B

5. What is the difference between vertical and horizontal scalability?
A) No difference
B) Horizontal is simpler
C) Vertical increases resources, horizontal adds machines
D) Vertical is cheaper
Resposta: C

📊 TOPIC: SCALABILITY AND PERFORMANCE
6. What is horizontal scalability?
A) Optimizing algorithms
B) Adding more machines to the system
C) Reducing number of users
D) Increasing resources of the same machine
Resposta: B

7. Load balancing is used for:
A) Increasing CPU of one server
B) Optimizing database
C) Distributing traffic across multiple servers
D) Reducing memory usage
Resposta: C

8. Caching helps with:
A) Reducing latency and backend load
B) Improving security
C) Simplifying code
D) Increasing storage
Resposta: A

9. CDN (Content Delivery Network) is used for:
A) Only for video streaming
B) Only for images
C) Geographic content distribution
D) Only for APIs
Resposta: C

10. Database sharding is:
A) Increasing backup
B) Only for NoSQL
C) Horizontal data division
D) Reducing security
Resposta: C

🔄 TOPIC: CONCURRENCY AND CONSISTENCY
11. What is eventual consistency?
A) Doesn't exist in distributed systems
B) Only for relational databases
C) System eventually reaches consistency
D) Immediate consistency always
Resposta: C

12. CAP theorem states that distributed systems can have:
A) All 3 simultaneously
B) Only availability
C) Only 2 of 3: Consistency, Availability, Partition tolerance
D) Only consistency
Resposta: C

13. Two-phase commit is used for:
A) Atomic distributed transactions
B) Reducing complexity
C) Only for local databases
D) Optimizing performance
Resposta: A

14. Quorum in distributed systems guarantees:
A) No guarantees
B) Only leader decides
C) Majority agrees on operations
D) All always agree
Resposta: C

15. Raft consensus algorithm is used for:
A) Only for databases
B) Only for cache
C) Leader election in distributed systems
D) Only for APIs
Resposta: C

🔒 TOPIC: SECURITY AND AUTHENTICATION
16. OAuth 2.0 is used for:
A) Only for local login
B) Delegated authorization
C) Only for passwords
D) Only for internal APIs
Resposta: B

17. JWT (JSON Web Token) is used for:
A) Only for passwords
B) Stateless authentication
C) Only for session management
D) Only for encryption
Resposta: B

18. Rate limiting helps with:
A) Simplifying code
B) Reducing costs
C) Preventing abuse and DoS attacks
D) Increasing performance
Resposta: C

19. API keys are used for:
A) Authenticating and authorizing API calls
B) Only for end users
C) Only for debugging
D) Only for admin
Resposta: A

20. HTTPS guarantees:
A) Only for APIs
B) Only for websites
C) Only for databases
D) Encryption in transit
Resposta: D

📡 TOPIC: COMMUNICATION AND MESSAGING
21. Message queues are used for:
A) Only for notifications
B) Only for email
C) Asynchronous communication between services
D) Only for SMS
Resposta: C

22. Pub/Sub pattern is useful for:
A) Only for batch processing
B) Only for real-time
C) Only for streaming
D) Decoupling producers and consumers
Resposta: D

23. WebSockets allow:
A) Bidirectional real-time communication
B) Only for HTTPS
C) Only for REST APIs
D) Only for HTTP
Resposta: A

24. gRPC is based on:
A) Only JSON
B) Only HTTP/1.1
C) Only XML
D) Protocol Buffers and HTTP/2
Resposta: D

25. Event-driven architecture uses:
A) Only for UI
B) Only for APIs
C) Only for databases
D) Events for communication between services
Resposta: D

🗄️ TOPIC: DATA STORAGE AND PERSISTENCE
26. SQL vs NoSQL: NoSQL is better for:
A) Only for ACID transactions
B) Only for small volumes
C) Unstructured data and horizontal scalability
D) Only for relational data
Resposta: C

27. Database indexing helps with:
A) Reducing security
B) Simplifying backups
C) Query performance
D) Increasing storage
Resposta: C

28. Read replicas are used for:
A) Only for backups
B) Scaling database reads
C) Only for writes
D) Only for development
Resposta: B

29. Time-series databases are optimized for:
A) Timestamped data
B) Only for text
C) Only for documents
D) Only for images
Resposta: A

30. Data lakes are used for:
A) Only for cache
B) Only for structured data
C) Storing large volumes of raw data
D) Only for transactions
Resposta: C

🔍 TOPIC: MONITORING AND OBSERVABILITY
31. What is observability in systems?
A) Only for metrics
B) Only for tracing
C) Ability to understand internal behavior through external data
D) Only for logs
Resposta: C

32. Structured logs are better because:
A) They use less space
B) They are faster
C) They are simpler
D) They facilitate parsing and analysis
Resposta: D

33. Metrics vs logs: metrics are:
A) Only for errors
B) Only for performance
C) Numerical data aggregated over time
D) Only for debugging
Resposta: C

34. Distributed tracing helps with:
A) Only for databases
B) Only for one service
C) Only for APIs
D) Tracking requests across multiple services
Resposta: D

35. SLA (Service Level Agreement) defines:
A) Only for performance
B) Expected service levels
C) Only for uptime
D) Only for security
Resposta: B

🚀 TOPIC: MICROSERVICES AND DISTRIBUTED SYSTEMS
36. Microservices architecture is characterized by:
A) Only for APIs
B) Single monolith
C) Only for databases
D) Small and independent services
Resposta: D

37. Service discovery is necessary for:
A) Only for development
B) Finding dynamic service endpoints
C) Only for testing
D) Only for static IPs
Resposta: B

38. API Gateway is used for:
A) Managing routing and cross-cutting concerns
B) Only for logging
C) Only for load balancing
D) Only for authentication
Resposta: A

39. Circuit breaker pattern in microservices:
A) Increases performance
B) Prevents cascade failures
C) Simplifies code
D) Reduces costs
Resposta: B

40. Sidecar pattern is used for:
A) Adding functionality without modifying main application
B) Only for security
C) Only for logging
D) Only for monitoring
Resposta: A

🌐 TOPIC: NETWORKING AND PROTOCOLS
41. TCP vs UDP: TCP guarantees:
A) Only speed
B) Only low latency
C) Ordered and reliable delivery
D) Only for streaming
Resposta: C

42. HTTP/2 improves over HTTP/1.1 with:
A) Only for HTTPS
B) Multiplexing and server push
C) Only for browsers
D) Only for APIs
Resposta: B

43. DNS resolution is used for:
A) Converting domain names to IPs
B) Only for APIs
C) Only for websites
D) Only for emails
Resposta: A

44. Load balancing algorithms include:
A) Round robin, least connections, IP hash
B) Only manual
C) Only random
D) Only sequential
Resposta: A

45. CDN edge locations help with:
A) Reducing latency for global users
B) Only for downloads
C) Only for streaming
D) Only for APIs
Resposta: A

🔧 TOPIC: DEPLOYMENT AND CI/CD
46. Blue-green deployment is:
A) Only for testing
B) Only for rollback
C) Only for development
D) Maintaining two versions in production and switching traffic
Resposta: D

47. Canary releases test:
A) Only in staging
B) New versions with small traffic percentage
C) Only after full release
D) Only with internal users
Resposta: B

48. Containers (Docker) help with:
A) Only for testing
B) Consistency between environments
C) Only for development
D) Only for production
Resposta: B

49. Kubernetes orchestrates:
A) Only bare metal
B) Only physical servers
C) Only VMs
D) Containers at scale
Resposta: D

50. Infrastructure as Code (IaC) is:
A) Only for on-premise
B) Only for containers
C) Managing infrastructure with code
D) Only for cloud
Resposta: C

💾 TOPIC: CACHING AND OPTIMIZATION
51. Cache invalidation strategies include:
A) Only by time
B) Only manual
C) TTL, write-through, write-behind
D) Only automatic
Resposta: C

52. Redis is often used for:
A) Only for lists
B) Only for session storage
C) Distributed cache and message broker
D) Only for pub/sub
Resposta: C

53. Browser caching uses:
A) Headers like Cache-Control and ETag
B) Only for images
C) Only for CSS
D) Only for JavaScript
Resposta: A

54. Application layer caching is:
A) Only database cache
B) Application-level cache
C) Only browser cache
D) Only CDN cache
Resposta: B

55. Cache warming is:
A) Only for production
B) Only for development
C) Only for cold start
D) Pre-filling cache with anticipated data
Resposta: D

🔐 TOPIC: ADVANCED SECURITY
56. Zero Trust security model assumes:
A) Only internal networks are trusted
B) Only external networks are untrusted
C) Only cloud is untrusted
D) No network is trusted by default
Resposta: D

57. WAF (Web Application Firewall) protects against:
A) Application-level web attacks
B) Only for SQL injection
C) Only for DDoS
D) Only for XSS
Resposta: A

58. Secret management is important for:
A) Only for passwords
B) Managing keys and credentials securely
C) Only for API keys
D) Only for certificates
Resposta: B

59. Rate limiting algorithms include:
A) Only by IP
B) Only by user
C) Only by endpoint
D) Token bucket, sliding window, fixed window
Resposta: D

60. DDoS mitigation strategies include:
A) Rate limiting, blackholing, anycast
B) Only increasing capacity
C) Only blocking IPs
D) Only firewall
Resposta: A

📊 TOPIC: ANALYTICS AND DATA PROCESSING
61. Stream processing is used for:
A) Only for reports
B) Real-time data processing
C) Only for batch processing
D) Only for historical data
Resposta: B

62. Batch processing is characterized by:
A) Only for real-time
B) Only for streaming
C) Only for interactive queries
D) Processing data in batches
Resposta: D

63. Data warehouse is optimized for:
A) Analysis and reporting
B) Only for real-time
C) Only for transactions
D) Only for operational data
Resposta: A

64. ETL (Extract, Transform, Load) is used for:
A) Only for backup
B) Moving data between systems
C) Only for synchronization
D) Only for replication
Resposta: B

65. Lambda architecture combines:
A) Only stream
B) Batch and stream processing
C) Only batch
D) Only real-time
Resposta: B

🌍 TOPIC: GLOBAL AND MULTI-REGION
66. Multi-region deployment helps with:
A) Only for backup
B) Only for compliance
C) Redundancy and latency reduction
D) Only for disaster recovery
Resposta: C

67. GeoDNS routes users to:
A) Only for US
B) Only for Asia
C) Nearest region
D) Only for Europe
Resposta: C

68. Data residency requirements require:
A) Only for GDPR
B) Only for HIPAA
C) Data to remain in certain regions
D) Only for PCI
Resposta: C

69. Cross-region replication is used for:
A) Disaster recovery and read locality
B) Only for testing
C) Only for backup
D) Only for migration
Resposta: A

70. Global load balancing distributes:
A) Only for data centers
B) Only for APIs
C) Only within one region
D) Traffic between regions
Resposta: D

🔧 TOPIC: SPECIFIC SYSTEM DESIGNS
71. URL shortener design considers:
A) Only for analytics
B) Unique ID generation and fast redirection
C) Only for branding
D) Only for security
Resposta: B

72. Push notification system needs:
A) Only for iOS
B) Only for Android
C) Only for web
D) Scalability and reliable delivery
Resposta: D

73. Chat system design considers:
A) Only for voice
B) Real-time messaging and persistence
C) Only for video
D) Only for text
Resposta: B

74. File upload system deals with:
A) Distributed storage and asynchronous processing
B) Only for videos
C) Only for images
D) Only for documents
Resposta: A

75. Search system design includes:
A) Only for structured data
B) Only for full-text
C) Indexing and query processing
D) Only for autocomplete
Resposta: C

📱 TOPIC: MOBILE AND CLIENT-SIDE
76. Offline-first design considers:
A) Only for mobile
B) Only for web
C) Functionality without connection
D) Only for desktop
Resposta: C

77. Sync conflicts are resolved with:
A) Operational transformation or CRDTs
B) Only last-writer-wins
C) Only first-writer-wins
D) Only manual resolution
Resposta: A

78. Mobile app backend considers:
A) Only for APIs
B) Only for authentication
C) Only for databases
D) Push notifications and data sync
Resposta: D

79. Progressive Web Apps (PWAs) offer:
A) Only for Android
B) Mobile-like experience on web
C) Only for iOS
D) Only for desktop
Resposta: B

80. Client-side caching reduces:
A) Server load and latency
B) Only for CPU
C) Only for bandwidth
D) Only for memory
Resposta: A

🎯 TOPIC: PERFORMANCE AND OPTIMIZATION
81. Database connection pooling improves:
A) Only for security
B) Connection reuse and performance
C) Only for replication
D) Only for backup
Resposta: B

82. Query optimization includes:
A) Indexes and execution plans
B) Only for caching
C) Only for sharding
D) Only for replication
Resposta: A

83. Lazy loading loads:
A) Data only when needed
B) Only for web
C) Everything at start
D) Only for mobile
Resposta: A

84. Pagination is used for:
A) Only for mobile
B) Only for APIs
C) Only for web
D) Limiting amount of returned data
Resposta: D

85. Compression reduces:
A) Only for text
B) Data size and bandwidth
C) Only for video
D) Only for images
Resposta: B

🔍 TOPIC: DEBUGGING AND TROUBLESHOOTING
86. Distributed logging centralizes:
A) Logs from multiple services
B) Only for one service
C) Only for errors
D) Only for performance
Resposta: A

87. Health checks verify:
A) Service status and dependencies
B) Only for databases
C) 
D) Only for cache
Resposta: A

88. Post-mortem analysis focuses on:
A) Only on logs
B) Only on blaming individuals
C) Only on metrics
D) Root cause of incidents
Resposta: D

89. Debugging in distributed systems requires:
A) Only unit tests
B) Correlated tracing and logging
C) Only print statements
D) Only breakpoints
Resposta: B

90. Error budgeting defines:
A) Only for performance
B) Only for uptime
C) Acceptable planned failures
D) Only for costs
Resposta: C

🏗️ TOPIC: ARCHITECTURE AND PATTERNS
91. Event sourcing stores:
A) Only for backup
B) Sequence of events as state
C) Only snapshots
D) Only current state
Resposta: B

92. CQRS (Command Query Responsibility Segregation) separates:
A) Only by user
B) Write and read operations
C) Only by region
D) Only by service
Resposta: B

93. Saga pattern manages:
A) Only for ACID
B) Distributed transactions with compensation
C) Only for rollback
D) Only for commit
Resposta: B

94. Backend for Frontend (BFF) creates:
A) Only for mobile
B) Only for web
C) Specific APIs for each frontend
D) Only one generic API
Resposta: C

95. Strangler fig pattern migrates:
A) Only for complete rewrite
B) Only for new code
C) Monoliths to microservices gradually
D) Only for legacy systems
Resposta: C

🌐 TOPIC: PROTOCOLS AND STANDARDS
96. RESTful APIs follow:
A) Only for JSON
B) Only for XML
C) HTTP principles and stateless
D) Only for SOAP
Resposta: C

97. GraphQL allows:
A) Only for SOAP
B) Flexible queries and efficient data fetching
C) Only for REST
D) Only for fixed endpoints
Resposta: B

98. Webhook is used for:
A) HTTP callbacks for events
B) Only for real-time
C) Only for polling
D) Only for streaming
Resposta: A

99. Message format standards include:
A) Only YAML
B) Only CSV
C) Only XML
D) JSON, Protocol Buffers, Avro
Resposta: D

100. API versioning strategies include:
A) Only breaking changes
B) Only backward compatibility
C) URL versioning, header versioning, content negotiation
D) Only deprecation
Resposta: C

🚀 TOPIC: FUTURE AND TRENDS
101. Serverless architecture eliminates:
A) Only for databases
B) Only for functions
C) Only for APIs
D) Server management
Resposta: D

102. Edge computing processes:
A) Data close to source
B) Only in data centers
C) Only in cloud
D) Only on servers
Resposta: A

103. AI/ML inference in system design considers:
A) Only for training
B) Only for data collection
C) Only for preprocessing
D) Model serving and latency
Resposta: D

104. Blockchain in system design is used for:
A) Only for smart contracts
B) Only for cryptocurrency
C) Only for transactions
D) Immutability and decentralization
Resposta: D

105. Quantum computing will impact:
A) Cryptography and complex algorithms
B) Only for web
C) Only for APIs
D) Only for databases
Resposta: A

🎯 TOPIC: BONUS - GO SPECIFIC
106. Go is good for system design because:
A) Only for web
B) Only for CLI
C) Only for microservices
D) Native concurrency and performance
Resposta: D

107. Goroutines are useful for:
A) Only for async operations
B) Only for parallel processing
C) Lightweight and efficient concurrency
D) 
Resposta: C

108. Channels in Go facilitate:
A) Only for locks
B) Only for mutexes
C) Safe communication between goroutines
D) Only for shared memory
Resposta: C

109. Context package in Go manages:
A) Deadlines, cancellation, and request-scoped values
B) Only for metrics
C) Only for logging
D) Only for tracing
Resposta: A

110. Go interfaces help with:
A) Decoupling and testability
B) Only for concurrency
C) Only for performance
D) Only for memory
Resposta: A

111. Go's standard library for system design includes:
A) net/http, database/sql, encoding/json
B) Only for networking
C) Only for databases
D) Only for web
Resposta: A

112. Go profiling tools help with:
A) Performance analysis and optimization
B) Only for testing
C) Only for debugging
D) Only for benchmarking
Resposta: A

113. Go's garbage collector is:
A) Only for large systems
B) Only for small applications
C) Only for servers
D) Low-latency and concurrent
Resposta: D

114. Go's static typing helps with:
A) Only for runtime
B) Compile-time error detection
C) Only for performance
D) Only for development
Resposta: B

115. Go's cross-compilation facilitates:
A) Deploying to multiple architectures
B) Only for Windows
C) Only for Linux
D) Only for macOS
Resposta: A

🔧 TOPIC: PRACTICAL IMPLEMENTATION
116. Rate limiting in Go can use:
A) Only for atomic counters
B) Only for mutexes
C) Token bucket algorithm with time.Ticker
D) Only for channels
Resposta: C

117. Connection pooling in Go uses:
A) Only for interfaces
B) Only for channels
C) Only for goroutines
D) sync.Pool or custom implementation
Resposta: D

118. Graceful shutdown in Go requires:
A) Signal handling and context cancellation
B) Only for SIGKILL
C) Only for SIGINT
D) Only for SIGTERM
Resposta: A

119. Middleware in Go web servers implements:
A) Only for responses
B) Only for handlers
C) Cross-cutting concerns like logging and auth
D) Only for routing
Resposta: C

120. Configuration management in Go uses:
A) Only for flags
B) Only for hardcoded values
C) Only for constants
D) Viper, environment variables, config files
Resposta: D

📊 TOPIC: MONITORING IN GO
121. Prometheus metrics in Go use:
A) Only for gauges
B) Only for histograms
C) Only for counters
D) Client library to expose metrics
Resposta: D

122. Structured logging in Go can use:
A) Only for log package
B) Only for fmt.Println
C) Only for custom solutions
D) Logrus, zap, or slog package
Resposta: D

123. Distributed tracing in Go integrates with:
A) Only for Prometheus
B) Only for ELK stack
C) Only for Grafana
D) Jaeger, Zipkin, or OpenTelemetry
Resposta: D

124. Health checks in Go return:
A) Only for timeouts
B) Only for errors
C) Only for 200 OK
D) HTTP status and dependency status
Resposta: D

125. Performance profiling in Go uses:
A) Only for benchmarks
B) Only for monitoring
C) Only for tests
D) pprof for CPU and memory analysis
Resposta: D

🚀 TOPIC: DEPLOYMENT IN GO
126. Containerization of Go applications uses:
A) Only for scratch images
B) Multi-stage builds to optimize size
C) Only for alpine
D) Only for ubuntu
Resposta: B

127. Kubernetes deployments for Go define:
A) Only for Pods
B) Deployments, Services, and ConfigMaps
C) Only for Nodes
D) Only for Clusters
Resposta: B

128. CI/CD for Go applications includes:
A) Test automation, building, and deployment
B) Only for deployment
C) Only for building
D) Only for testing
Resposta: A

129. Blue-green deployment in Go requires:
A) 
B) Load balancer and health checks
C) Only for servers
D) Only for VMs
Resposta: B

130. Canary analysis in Go monitors:
A) Only for performance
B) Only for latency
C) Only for availability
D) Metrics and errors during rollout
Resposta: D

🔐 TOPIC: SECURITY IN GO
131. JWT validation in Go uses:
A) Only for manual parsing
B) Libraries like go-jwt or auth0
C) Only for HMAC
D) Only for RSA
Resposta: B

132. Input validation in Go can use:
A) Only for length checks
B) Validator libraries or custom validation
C) Only for format validation
D) Only for type checking
Resposta: B

133. SQL injection prevention in Go uses:
A) Only for string concatenation
B) Only for sanitization
C) Only for escaping
D) Prepared statements and parameterized queries
Resposta: D

134. CORS handling in Go uses:
A) Only for credentials
B) Specific headers and middleware
C) Only for same-origin
D) Only for preflight
Resposta: B

135. Secret management in Go integrates with:
A) Only for environment variables
B) Only for hardcoded values
C) Vault, AWS Secrets Manager, or Kubernetes secrets
D) Only for config files
Resposta: C

📈 TOPIC: SCALABILITY IN GO
136. Horizontal scaling in Go uses:
A) Only for channels
B) Only for single instance
C) Multiple instances with load balancer
D) Only for goroutines
Resposta: C

137. Worker pools in Go implement:
A) Only for single worker
B) Controlled concurrency with goroutines
C) Only for sequential processing
D) Only for unlimited goroutines
Resposta: B

138. Fan-out pattern in Go distributes:
A) Work to multiple goroutines
B) Only for one worker
C) Only for single thread
D) Only for sequential
Resposta: A

139. Fan-in pattern in Go aggregates:
A) Only for ordered results
B) Only for sequential
C) Results from multiple goroutines
D) Only for single result
Resposta: C

140. Backpressure handling in Go uses:
A) Buffered channels and context cancellation
B) Only for blocking
C) Only for ignoring
D) Only for dropping messages
Resposta: A

🗄️ TOPIC: DATA IN GO
141. Database drivers in Go implement:
A) Only for MongoDB
B) Only for MySQL
C) Only for PostgreSQL
D) database/sql standard interface
Resposta: D

142. ORM in Go can use:
A) GORM, Ent, or sqlx
B) Only for manual queries
C) Only for raw SQL
D) Only for NoSQL
Resposta: A

143. Cache client in Go integrates with:
A) Only for disk cache
B) Only for distributed cache
C) Redis, Memcached, or custom implementation
D) Only for memory cache
Resposta: C

144. Message queue clients in Go support:
A) Only for SQS
B) Only for Google Pub/Sub
C) Kafka, RabbitMQ, or NATS
D) Only for Redis pub/sub
Resposta: C

145. Search integration in Go uses:
A) Only for database search
B) Only for structured queries
C) Elasticsearch clients or search libraries
D) Only for full-text
Resposta: C

🔍 TOPIC: TESTING IN GO
146. Load testing in Go uses:
A) Only for integration tests
B) Vegeta or custom load generators
C) Only for benchmarks
D) Only for unit tests
Resposta: B

147. Integration testing in Go requires:
A) Testcontainers or real mocks
B) Only for mocks
C) Only for stubs
D) Only for unit tests
Resposta: A

148. Contract testing in Go verifies:
A) Only for APIs
B) Only for messages
C) Only for databases
D) Compatibility between services
Resposta: D

149. Chaos engineering in Go tests:
A) Only for timeouts
B) Only for errors
C) Only for happy path
D) Resilience with controlled failures
Resposta: D

150. Property-based testing in Go uses:
A) Only for example-based tests
B) Only for integration tests
C) Gomel or similar libraries
D) Only for unit tests
Resposta: C
