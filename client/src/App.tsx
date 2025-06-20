"use client"

import { ArrowRight, Database, Shield, Zap, Users, FileText, Globe, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"

export default function Component() {
  const [openDialog, setOpenDialog] = useState<string | null>(null)

  const domains = [
    {
      name: "Claims",
      description: "Comprehensive claims processing and management data structures",
      icon: FileText,
      color: "bg-pink-200 text-pink-800",
    },
    {
      name: "Provider Management",
      description: "Healthcare provider networks, credentials, and relationship data",
      icon: Users,
      color: "bg-orange-200 text-orange-800",
    },
    {
      name: "Product",
      description: "Insurance product definitions, benefits, and coverage details",
      icon: Shield,
      color: "bg-purple-200 text-purple-800",
    },
    {
      name: "Policy",
      description: "Policy lifecycle management and administration data",
      icon: FileText,
      color: "bg-teal-200 text-teal-800",
    },
    {
      name: "Customer",
      description: "Member demographics, enrollment, and engagement data",
      icon: Users,
      color: "bg-pink-300 text-pink-800",
    },
    {
      name: "Distribution",
      description: "Sales channels, broker networks, and distribution analytics",
      icon: Globe,
      color: "bg-orange-300 text-orange-800",
    },
    {
      name: "Reference",
      description: "Master data, code sets, and standardized reference tables",
      icon: Database,
      color: "bg-purple-300 text-purple-800",
    },
  ]

  const features = [
    {
      title: "1000+ Data Attributes",
      description: "Comprehensive coverage of health insurance data elements with detailed metadata",
      icon: Database,
    },
    {
      title: "Column Descriptions",
      description: "Clear, standardized descriptions for every data element in your warehouse",
      icon: FileText,
    },
    {
      title: "Join Descriptors",
      description: "Detailed relationship mapping between tables and data entities",
      icon: ArrowRight,
    },
    {
      title: "Referential Integrity",
      description: "Maintain data quality with built-in integrity constraints and validation",
      icon: Shield,
    },
    {
      title: "Version Control",
      description: "Track changes and updates to your data model over time",
      icon: Zap,
    },
    {
      title: "Example Data Values",
      description: "Sample data to help understand expected formats and ranges",
      icon: CheckCircle,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-700 to-purple-700 rounded-lg flex items-center justify-center">
                <Database className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Signal Studios</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#domains" className="text-gray-600 hover:text-gray-900 transition-colors">
                Domains
              </a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
                Services
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
            </nav>
            <Button className="bg-gradient-to-r from-pink-700 to-orange-600 hover:from-pink-700 hover:to-orange-600">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-orange-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-pink-200 text-pink-800 hover:bg-pink-200">Target Health Data Model (THDM)</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Health Data Warehouse <span className="text-pink-600">Overnight</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Complete health data metastore for health insurance providers. Make sense of complex claims processing
              data with 1000+ standardized data attributes across 7 key domains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-700 to-orange-600 hover:from-pink-700 hover:to-orange-600"
              >
                Explore THDM
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Health Data Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              THDM provides everything you need to understand, map, and optimize your health insurance data
              infrastructure.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-pink-200 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-pink-700" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                End-to-End Data Transformation Services
              </h2>
              <p className="text-xl text-gray-600">
                Beyond the metastore, we provide complete mapping and ETL services to transform your existing data
                warehouse.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Data Mapping Services */}
              <Dialog open={openDialog === "mapping"} onOpenChange={(open) => setOpenDialog(open ? "mapping" : null)}>
                <DialogTrigger asChild>
                  <Card className="border-0 shadow-lg cursor-pointer hover:shadow-xl transition-all transform hover:scale-105">
                    <CardHeader>
                      <div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center mb-4">
                        <ArrowRight className="w-6 h-6 text-green-700" />
                      </div>
                      <CardTitle className="text-2xl">Data Mapping Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4">
                        Our experts map your existing data structures to the THDM standard, ensuring seamless
                        integration and compliance.
                      </CardDescription>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Schema analysis and mapping
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Data quality assessment
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Compliance validation
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">Data Mapping Services</DialogTitle>
                    <DialogDescription className="text-lg text-gray-600">
                      Transform your existing health insurance data structures to align with industry standards and best
                      practices.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 mt-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">What We Do</h3>
                      <p className="text-gray-600 mb-4">
                        Our data mapping experts analyze your current data warehouse architecture and create
                        comprehensive mappings to the Target Health Data Model (THDM). We ensure your data maintains its
                        integrity while becoming standardized and compliant with industry best practices.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Process</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">1. Discovery & Analysis</h4>
                          <p className="text-sm text-gray-600">
                            Comprehensive analysis of your existing data structures, relationships, and business rules.
                          </p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">2. Gap Assessment</h4>
                          <p className="text-sm text-gray-600">
                            Identify gaps between current state and THDM requirements, including data quality issues.
                          </p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">3. Mapping Design</h4>
                          <p className="text-sm text-gray-600">
                            Create detailed field-level mappings with transformation rules and validation logic.
                          </p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">4. Validation & Testing</h4>
                          <p className="text-sm text-gray-600">
                            Rigorous testing of mappings to ensure data accuracy and business rule compliance.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Benefits</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                          <span className="text-gray-600">
                            <strong>Standardization:</strong> Align your data with industry standards for better
                            interoperability
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                          <span className="text-gray-600">
                            <strong>Compliance:</strong> Meet regulatory requirements and audit standards
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                          <span className="text-gray-600">
                            <strong>Data Quality:</strong> Improve data consistency and reduce errors
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                          <span className="text-gray-600">
                            <strong>Future-Proof:</strong> Prepare your data architecture for future growth and changes
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Deliverables</h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Comprehensive data mapping documentation</li>
                          <li>• Field-level transformation specifications</li>
                          <li>• Data quality assessment report</li>
                          <li>• Compliance validation checklist</li>
                          <li>• Implementation roadmap and timeline</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              {/* ETL Implementation */}
              <Dialog open={openDialog === "etl"} onOpenChange={(open) => setOpenDialog(open ? "etl" : null)}>
                <DialogTrigger asChild>
                  <Card className="border-0 shadow-lg cursor-pointer hover:shadow-xl transition-all transform hover:scale-105">
                    <CardHeader>
                      <div className="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center mb-4">
                        <Zap className="w-6 h-6 text-purple-700" />
                      </div>
                      <CardTitle className="text-2xl">ETL Implementation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4">
                        Complete ETL pipeline development to transform your data warehouse according to THDM
                        specifications.
                      </CardDescription>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Custom ETL pipeline development
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Automated data validation
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Performance optimization
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">ETL Implementation</DialogTitle>
                    <DialogDescription className="text-lg text-gray-600">
                      Build robust, scalable ETL pipelines that transform your health insurance data efficiently and
                      reliably.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 mt-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">What We Build</h3>
                      <p className="text-gray-600 mb-4">
                        We develop custom ETL (Extract, Transform, Load) pipelines tailored to your specific data
                        sources and business requirements. Our solutions handle complex health insurance data
                        transformations while ensuring high performance, reliability, and maintainability.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Approach</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-800 mb-2">Modern Technologies</h4>
                          <p className="text-sm text-gray-600">
                            Apache Airflow, dbt, Spark, and cloud-native solutions for scalable data processing.
                          </p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-800 mb-2">Incremental Processing</h4>
                          <p className="text-sm text-gray-600">
                            Efficient change data capture and incremental loading to minimize processing time.
                          </p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-800 mb-2">Error Handling</h4>
                          <p className="text-sm text-gray-600">
                            Comprehensive error handling, logging, and alerting for production reliability.
                          </p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-800 mb-2">Monitoring & Observability</h4>
                          <p className="text-sm text-gray-600">
                            Real-time monitoring dashboards and performance metrics for operational visibility.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Pipeline Features</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Zap className="w-5 h-5 text-purple-500 mr-3 mt-0.5" />
                          <span className="text-gray-600">
                            <strong>Automated Scheduling:</strong> Configurable scheduling with dependency management
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Zap className="w-5 h-5 text-purple-500 mr-3 mt-0.5" />
                          <span className="text-gray-600">
                            <strong>Data Lineage:</strong> Complete traceability of data transformations
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Zap className="w-5 h-5 text-purple-500 mr-3 mt-0.5" />
                          <span className="text-gray-600">
                            <strong>Parallel Processing:</strong> Optimized for high-volume data processing
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Zap className="w-5 h-5 text-purple-500 mr-3 mt-0.5" />
                          <span className="text-gray-600">
                            <strong>Rollback Capability:</strong> Safe deployment with rollback mechanisms
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementation Timeline</h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-semibold text-sm mr-3">
                              1
                            </div>
                            <span className="text-gray-600">
                              <strong>Weeks 1-2:</strong> Architecture design and technical specifications
                            </span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-semibold text-sm mr-3">
                              2
                            </div>
                            <span className="text-gray-600">
                              <strong>Weeks 3-6:</strong> Core pipeline development and unit testing
                            </span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-semibold text-sm mr-3">
                              3
                            </div>
                            <span className="text-gray-600">
                              <strong>Weeks 7-8:</strong> Integration testing and performance optimization
                            </span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-semibold text-sm mr-3">
                              4
                            </div>
                            <span className="text-gray-600">
                              <strong>Weeks 9-10:</strong> Production deployment and monitoring setup
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Automated Data Quality Validation */}
              <Dialog open={openDialog === "quality"} onOpenChange={(open) => setOpenDialog(open ? "quality" : null)}>
                <DialogTrigger asChild>
                  <Card className="border-0 shadow-lg cursor-pointer hover:shadow-xl transition-all transform hover:scale-105">
                    <CardHeader>
                      <div className="w-12 h-12 bg-teal-200 rounded-lg flex items-center justify-center mb-4">
                        <CheckCircle className="w-6 h-6 text-teal-700" />
                      </div>
                      <CardTitle className="text-2xl">Automated Data Quality Validation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4">
                        Built-in data quality validation using Great Expectations framework, integrated directly within
                        your data pipelines for continuous monitoring.
                      </CardDescription>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Great Expectations integration
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Real-time data quality monitoring
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Automated anomaly detection
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
                      Automated Data Quality Validation
                    </DialogTitle>
                    <DialogDescription className="text-lg text-gray-600">
                      Ensure data integrity and reliability with automated quality checks powered by Great Expectations
                      framework.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 mt-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Great Expectations Framework</h3>
                      <p className="text-gray-600 mb-4">
                        We implement Great Expectations, the leading open-source data validation framework, to create
                        comprehensive data quality suites that run automatically within your data pipelines. This
                        ensures your health insurance data meets quality standards at every stage of processing.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Validation Types</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-teal-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-teal-800 mb-2">Schema Validation</h4>
                          <p className="text-sm text-gray-600">
                            Ensure data types, column presence, and structural integrity across all tables.
                          </p>
                        </div>
                        <div className="bg-teal-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-teal-800 mb-2">Business Rule Validation</h4>
                          <p className="text-sm text-gray-600">
                            Validate complex business logic specific to health insurance operations.
                          </p>
                        </div>
                        <div className="bg-teal-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-teal-800 mb-2">Statistical Profiling</h4>
                          <p className="text-sm text-gray-600">
                            Monitor data distributions, outliers, and statistical anomalies.
                          </p>
                        </div>
                        <div className="bg-teal-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-teal-800 mb-2">Referential Integrity</h4>
                          <p className="text-sm text-gray-600">
                            Validate relationships between tables and ensure data consistency.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Monitoring Features</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-0.5" />
                          <span className="text-gray-600">
                            <strong>Real-time Alerts:</strong> Immediate notifications when data quality issues are
                            detected
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-0.5" />
                          <span className="text-gray-600">
                            <strong>Quality Dashboards:</strong> Visual monitoring of data quality metrics and trends
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-0.5" />
                          <span className="text-gray-600">
                            <strong>Historical Tracking:</strong> Track data quality improvements over time
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-0.5" />
                          <span className="text-gray-600">
                            <strong>Automated Remediation:</strong> Self-healing capabilities for common data issues
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        Health Insurance Specific Validations
                      </h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>
                            • <strong>Claims Validation:</strong> Verify claim amounts, dates, and provider
                            relationships
                          </li>
                          <li>
                            • <strong>Member Eligibility:</strong> Ensure member enrollment periods and coverage
                            validity
                          </li>
                          <li>
                            • <strong>Provider Network:</strong> Validate provider credentials and network participation
                          </li>
                          <li>
                            • <strong>Regulatory Compliance:</strong> Check adherence to HIPAA and other healthcare
                            regulations
                          </li>
                          <li>
                            • <strong>Financial Reconciliation:</strong> Validate premium calculations and payment
                            processing
                          </li>
                          <li>
                            • <strong>Medical Coding:</strong> Verify ICD-10, CPT, and other medical code accuracy
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementation Benefits</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900">Operational Benefits</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Reduced manual data validation effort</li>
                            <li>• Faster issue detection and resolution</li>
                            <li>• Improved data reliability for reporting</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900">Business Benefits</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Enhanced regulatory compliance</li>
                            <li>• Better decision-making with trusted data</li>
                            <li>• Reduced risk of data-related errors</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Analytics COE */}
              <Dialog
                open={openDialog === "analytics"}
                onOpenChange={(open) => setOpenDialog(open ? "analytics" : null)}
              >
                <DialogTrigger asChild>
                  <Card className="border-0 shadow-lg cursor-pointer hover:shadow-xl transition-all transform hover:scale-105">
                    <CardHeader>
                      <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-orange-700" />
                      </div>
                      <CardTitle className="text-2xl">Analytics COE</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4">
                        Elite SWAT team of data experts who investigate complex data issues and uncover hidden value
                        opportunities within your health insurance operations.
                      </CardDescription>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Rapid issue investigation
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Hidden value discovery
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Strategic recommendations
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
                      Analytics Center of Excellence (COE)
                    </DialogTitle>
                    <DialogDescription className="text-lg text-gray-600">
                      Elite data investigation team that rapidly identifies issues, uncovers hidden opportunities, and
                      delivers strategic insights for your health insurance business.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 mt-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Data SWAT Team</h3>
                      <p className="text-gray-600 mb-4">
                        Our Analytics COE operates like a specialized SWAT unit for your data challenges. When complex
                        issues arise or opportunities need investigation, our elite team of data scientists, analysts,
                        and domain experts mobilize quickly to deliver rapid, high-impact solutions.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Core Capabilities</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-800 mb-2">Rapid Response Investigation</h4>
                          <p className="text-sm text-gray-600">
                            Deploy within 24-48 hours to investigate critical data anomalies, quality issues, or
                            business disruptions.
                          </p>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-800 mb-2">Hidden Value Mining</h4>
                          <p className="text-sm text-gray-600">
                            Advanced analytics to uncover revenue opportunities, cost savings, and operational
                            efficiencies.
                          </p>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-800 mb-2">Root Cause Analysis</h4>
                          <p className="text-sm text-gray-600">
                            Deep-dive investigations using statistical methods and domain expertise to identify true
                            causes.
                          </p>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-800 mb-2">Strategic Recommendations</h4>
                          <p className="text-sm text-gray-600">
                            Actionable insights with clear implementation roadmaps and expected business impact.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Investigation Focus Areas</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Users className="w-5 h-5 text-orange-500 mr-3 mt-0.5" />
                          <span className="text-gray-600">
                            <strong>Claims Anomalies:</strong> Investigate unusual claim patterns, fraud indicators, and
                            processing inefficiencies
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Users className="w-5 h-5 text-orange-500 mr-3 mt-0.5" />
                          <span className="text-gray-600">
                            <strong>Member Behavior:</strong> Analyze enrollment trends, utilization patterns, and churn
                            indicators
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Users className="w-5 h-5 text-orange-500 mr-3 mt-0.5" />
                          <span className="text-gray-600">
                            <strong>Provider Performance:</strong> Evaluate network efficiency, cost variations, and
                            quality metrics
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Users className="w-5 h-5 text-orange-500 mr-3 mt-0.5" />
                          <span className="text-gray-600">
                            <strong>Financial Optimization:</strong> Identify revenue leakage, cost reduction
                            opportunities, and pricing insights
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Rapid Deployment Process</h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-semibold text-sm mr-3">
                              1
                            </div>
                            <span className="text-gray-600">
                              <strong>Alert & Mobilization:</strong> Issue identification and team deployment within 24
                              hours
                            </span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-semibold text-sm mr-3">
                              2
                            </div>
                            <span className="text-gray-600">
                              <strong>Rapid Assessment:</strong> Initial data analysis and hypothesis formation (Days
                              1-2)
                            </span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-semibold text-sm mr-3">
                              3
                            </div>
                            <span className="text-gray-600">
                              <strong>Deep Investigation:</strong> Comprehensive analysis and validation (Days 3-7)
                            </span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-semibold text-sm mr-3">
                              4
                            </div>
                            <span className="text-gray-600">
                              <strong>Solution Delivery:</strong> Findings presentation and implementation roadmap (Day
                              8-10)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Hidden Value Discovery Examples</h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>
                            • <strong>Revenue Recovery:</strong> Identified $2.3M in unclaimed reimbursements through
                            claims pattern analysis
                          </li>
                          <li>
                            • <strong>Fraud Detection:</strong> Discovered provider billing anomalies saving $1.8M
                            annually
                          </li>
                          <li>
                            • <strong>Member Retention:</strong> Predicted churn patterns enabling proactive retention
                            strategies
                          </li>
                          <li>
                            • <strong>Network Optimization:</strong> Identified underutilized high-quality providers for
                            better outcomes
                          </li>
                          <li>
                            • <strong>Operational Efficiency:</strong> Streamlined claims processing reducing cycle time
                            by 35%
                          </li>
                          <li>
                            • <strong>Risk Adjustment:</strong> Improved risk scoring accuracy increasing revenue by
                            $4.2M
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Team Composition</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900">Technical Experts</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Senior Data Scientists</li>
                            <li>• Healthcare Analytics Specialists</li>
                            <li>• Statistical Modeling Experts</li>
                            <li>• Machine Learning Engineers</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900">Domain Specialists</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Health Insurance Operations</li>
                            <li>• Claims Processing Experts</li>
                            <li>• Regulatory Compliance Specialists</li>
                            <li>• Financial Analysis Professionals</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Engagement Models</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-orange-50 p-4 rounded-lg text-center">
                          <h4 className="font-semibold text-orange-800 mb-2">Emergency Response</h4>
                          <p className="text-sm text-gray-600">Critical issue investigation with 24-hour deployment</p>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg text-center">
                          <h4 className="font-semibold text-orange-800 mb-2">Opportunity Mining</h4>
                          <p className="text-sm text-gray-600">Proactive value discovery and optimization projects</p>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg text-center">
                          <h4 className="font-semibold text-orange-800 mb-2">Retainer Support</h4>
                          <p className="text-sm text-gray-600">Ongoing analytics support with dedicated team access</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
