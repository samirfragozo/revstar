<?php

namespace App\Mail\Product;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class SendPdf extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(private readonly string $companyName, private readonly string $pdfPath)
    {
    }

    public function envelope(): Envelope
    {
        return new Envelope(subject: "Inventario - Empresa: $this->companyName",);
    }

    public function content(): Content
    {
        return new Content(view: 'mails.products.send-pdf', with: [
            'companyName' => $this->companyName,
        ],);
    }

    public function attachments(): array
    {
        return [
            Attachment::fromPath(storage_path($this->pdfPath))->as('inventario.pdf')->withMime('application/pdf'),
        ];
    }
}
