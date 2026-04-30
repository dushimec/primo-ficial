import nodemailer from "nodemailer";
import type { ContactFormData } from "./contact-service";

export interface EmailServiceResponse {
  success: boolean;
  message: string;
}

export interface TrainingApplicationData {
  fullName: string;
  email: string;
  phone: string;
  university: string;
  fieldOfStudy: string;
  motivationLetter: string;
}

export class EmailService {
  private static instance: EmailService;
  private transporter: nodemailer.Transporter | null = null;

  private constructor() {
    // Initialize transporter only if environment variables are available
    this.initializeTransporter();
  }

  private initializeTransporter() {
    // Only create the transporter if the required environment variables are available
    if (process.env.EMAIL_HOST && process.env.EMAIL_USER) {
      this.transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number.parseInt(process.env.EMAIL_PORT || "587"),
        secure: process.env.EMAIL_SECURE === "true",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
    }
  }

  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  async sendTrainingNotification(
    data: TrainingApplicationData,
  ): Promise<EmailServiceResponse> {
    try {
      // Check if transporter is initialized
      if (!this.transporter) {
        // Try to initialize it again in case environment variables are now available
        this.initializeTransporter();

        // If still not available, return an error
        if (!this.transporter) {
          console.warn(
            "Email service not configured. Check your environment variables.",
          );
          return {
            success: false,
            message: "Email service not configured",
          };
        }
      }

      // Validate required environment variables
      if (!process.env.EMAIL_USER || !process.env.EMAIL_TO) {
        return {
          success: false,
          message: "Email configuration is missing",
        };
      }

      // Send email to admin
      const adminMailOptions = {
        from: `"Primo Fiscal Partners" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        subject: "New Training Application Submission",
        html: this.getTrainingAdminEmailTemplate(data),
      };

      await this.transporter.sendMail(adminMailOptions);

      // Send confirmation email to user
      const userMailOptions = {
        from: `"Primo Fiscal Partners" <${process.env.EMAIL_USER}>`,
        to: data.email,
        subject: "Thank you for applying to our Training Program",
        html: this.getTrainingUserEmailTemplate(data),
      };

      await this.transporter.sendMail(userMailOptions);

      return {
        success: true,
        message: "Notification emails sent successfully",
      };
    } catch (error) {
      console.error("Error sending training email notification:", error);
      return {
        success: false,
        message: "Failed to send training email notification",
      };
    }
  }

  async sendContactNotification(
    data: ContactFormData,
  ): Promise<EmailServiceResponse> {
    try {
      // Check if transporter is initialized
      if (!this.transporter) {
        // Try to initialize it again in case environment variables are now available
        this.initializeTransporter();

        // If still not available, return an error
        if (!this.transporter) {
          console.warn(
            "Email service not configured. Check your environment variables.",
          );
          return {
            success: false,
            message: "Email service not configured",
          };
        }
      }

      // Validate required environment variables
      if (!process.env.EMAIL_USER || !process.env.EMAIL_TO) {
        return {
          success: false,
          message: "Email configuration is missing",
        };
      }

      // Send email to admin
      const adminMailOptions = {
        from: `"Primo Fiscal Partners" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        subject: "New Contact Form Submission",
        html: this.getAdminEmailTemplate(data),
      };

      await this.transporter.sendMail(adminMailOptions);

      // Send confirmation email to user
      const userMailOptions = {
        from: `"Primo Fiscal Partners" <${process.env.EMAIL_USER}>`,
        to: data.email,
        subject: "Thank you for contacting Primo Fiscal Partners",
        html: this.getUserEmailTemplate(data),
      };

      await this.transporter.sendMail(userMailOptions);

      return {
        success: true,
        message: "Notification emails sent successfully",
      };
    } catch (error) {
      console.error("Error sending email notification:", error);
      return {
        success: false,
        message: "Failed to send email notification",
      };
    }
  }

  private getAdminEmailTemplate(data: ContactFormData): string {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
        <h2 style="color: #f97316; margin-bottom: 20px;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Message:</strong></p>
        <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${data.message}</p>
        <p style="margin-top: 30px; font-size: 12px; color: #666;">This is an automated email from your website contact form.</p>
      </div>
    `;
  }

  private getUserEmailTemplate(data: ContactFormData): string {
    return `
       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
         <h2 style="color: #f97316; margin-bottom: 20px;">Thank You for Contacting Primo Fiscal Partners</h2>
         <p>Dear ${data.name},</p>
         <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
         <p>Here's a summary of the information you provided:</p>
         <ul>
           <li><strong>Name:</strong> ${data.name}</li>
           <li><strong>Email:</strong> ${data.email}</li>
           <li><strong>Phone:</strong> ${data.phone}</li>
         </ul>
         <p>Your Message:</p>
         <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${data.message}</p>
         <p>If you have any urgent matters, please contact us directly at +252 789 877 775.</p>
         <p>Best regards,</p>
         <p>The Primo Fiscal Partners Team</p>
         <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
           <p>YYussa City Center (Former Makuza Peace Plazza) F3-37</p>
           <p>Email: primofiscalpartners@gmail.com | Phone: +252 789 877 775</p>
         </div>
       </div>
     `;
  }

  private getTrainingAdminEmailTemplate(data: TrainingApplicationData): string {
    return `
       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
         <h2 style="color: #f97316; margin-bottom: 20px;">New Training Application Submission</h2>
         <p><strong>Full Name:</strong> ${data.fullName}</p>
         <p><strong>Email:</strong> ${data.email}</p>
         <p><strong>Phone:</strong> ${data.phone}</p>
         <p><strong>University/Institution:</strong> ${data.university}</p>
         <p><strong>Field of Study:</strong> ${data.fieldOfStudy}</p>
         <p><strong>Motivation Letter:</strong></p>
         <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${data.motivationLetter}</p>
         <p style="margin-top: 30px; font-size: 12px; color: #666;">This is an automated email from your website training application form.</p>
       </div>
     `;
  }

  private getTrainingUserEmailTemplate(data: TrainingApplicationData): string {
    return `
       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #f97316; margin-bottom: 20px;">Thank you for applying to our Training Program</h2>
          <p>Dear ${data.fullName},</p>
          <p>Thank you for applying to our training program. We have received your application and will review it shortly.</p>
          <p>Here's a summary of the information you provided:</p>
          <ul>
            <li><strong>Full Name:</strong> ${data.fullName}</li>
            <li><strong>Email:</strong> ${data.email}</li>
            <li><strong>Phone:</strong> ${data.phone}</li>
            <li><strong>University/Institution:</strong> ${data.university}</li>
            <li><strong>Field of Study:</strong> ${data.fieldOfStudy}</li>
          </ul>
          <p>Your Motivation Letter:</p>
          <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${data.motivationLetter}</p>
          <p>We will contact you via email or phone regarding the status of your application.</p>
          <p>Best regards,</p>
          <p>The Primo Fiscal Partners Team</p>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
            <p>YYussa City Center (Former Makuza Peace Plazza) F3-37</p>
            <p>Email: primofiscalpartners@gmail.com | Phone: +252 789 877 775</p>
          </div>
        </div>
      `;
  }

  private getTrainingStatusEmailTemplate(data: TrainingApplicationData & { status: string }): string {
    const statusText = data.status === "approved" ? "Approved" : "Rejected";
    const statusColor = data.status === "approved" ? "#10b981" : "#ef4444";
    const message = data.status === "approved" 
      ? "We are pleased to inform you that your training application has been approved!" 
      : "We regret to inform you that your training application has been rejected.";
    
    return `
       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: ${statusColor}; margin-bottom: 20px;">Training Application ${statusText}</h2>
          <p>Dear ${data.fullName},</p>
          <p>${message}</p>
          <p>Here's a summary of your application:</p>
          <ul>
            <li><strong>Full Name:</strong> ${data.fullName}</li>
            <li><strong>Email:</strong> ${data.email}</li>
            <li><strong>Phone:</strong> ${data.phone}</li>
            <li><strong>University/Institution:</strong> ${data.university}</li>
            <li><strong>Field of Study:</strong> ${data.fieldOfStudy}</li>
            <li><strong>Status:</strong> <span style="color: ${statusColor}; font-weight: bold;">${statusText}</span></li>
          </ul>
          <p><strong>Motivation Letter:</strong></p>
          <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${data.motivationLetter}</p>
          ${data.status === "rejected" ? '<p>If you have any questions or would like to reapply in the future, please don\'t hesitate to contact us.</p>' : ''}
          <p>Best regards,</p>
          <p>The Primo Fiscal Partners Team</p>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
            <p>YYussa City Center (Former Makuza Peace Plazza) F3-37</p>
            <p>Email: primofiscalpartners@gmail.com | Phone: +252 789 877 775</p>
          </div>
        </div>
      `;
  }

  async sendTrainingStatusNotification(
    data: TrainingApplicationData & { status: string },
  ): Promise<EmailServiceResponse> {
    try {
      // Check if transporter is initialized
      if (!this.transporter) {
        // Try to initialize it again in case environment variables are now available
        this.initializeTransporter();

        // If still not available, return an error
        if (!this.transporter) {
          console.warn(
            "Email service not configured. Check your environment variables.",
          );
          return {
            success: false,
            message: "Email service not configured",
          };
        }
      }

      // Validate required environment variables
      if (!process.env.EMAIL_USER || !process.env.EMAIL_TO) {
        return {
          success: false,
          message: "Email configuration is missing",
        };
      }

      // Send email to user
      const userMailOptions = {
        from: `"Primo Fiscal Partners" <${process.env.EMAIL_USER}>`,
        to: data.email,
        subject: `Training Application ${data.status === "approved" ? "Approved" : "Rejected"}`,
        html: this.getTrainingStatusEmailTemplate(data),
      };

      await this.transporter.sendMail(userMailOptions);

      return {
        success: true,
        message: "Status notification email sent successfully",
      };
    } catch (error) {
      console.error("Error sending training status notification email:", error);
      return {
        success: false,
        message: "Failed to send training status notification email",
      };
    }
  }
}

export default EmailService.getInstance();
