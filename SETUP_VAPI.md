# Vapi AI Setup Guide

This guide will help you set up Vapi AI for the mock interview feature.

## Step 1: Create a Vapi AI Account

1. Go to [https://vapi.ai](https://vapi.ai)
2. Sign up for a free account
3. Navigate to your dashboard

## Step 2: Get Your Web Token

1. In the Vapi dashboard, go to **Settings** → **API Keys**
2. Copy your **Web Token** (this is different from your API key)
3. The web token is used for client-side integration

## Step 3: Create an Assistant (Optional)

If you want to customize the assistant:

1. Go to **Assistants** in the dashboard
2. Create a new assistant or use the default one
3. Configure:
   - **Voice**: Choose a voice provider (11labs, etc.)
   - **Transcriber**: Choose a transcription provider (Deepgram, etc.)
   - **Model**: Choose an LLM provider (OpenAI, etc.)

## Step 4: Configure Environment Variables

Create or update `.env.local` in your project root:

```env
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_web_token_here
NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_workflow_id_here  # Optional: if you have a workflow
```

**Important**: 
- The token must start with `NEXT_PUBLIC_` to be accessible in the browser
- If you have a workflow ID, add it for easier setup
- Restart your Next.js dev server after adding the variables

## Step 5: Test the Integration

1. Make sure your Next.js server is running:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3001/interview`

3. Click the "Call" button to start the interview

4. Grant microphone permissions when prompted

## Troubleshooting

### "Vapi web token is missing" error
- Make sure `.env.local` exists in the project root
- Verify the token starts with `NEXT_PUBLIC_VAPI_WEB_TOKEN=`
- Restart your Next.js server after adding the token

### Microphone not working
- Check browser permissions for microphone access
- Use Chrome or Edge for best compatibility
- Make sure your microphone is connected and working

### Call not starting
- Check the browser console for errors
- Verify your Vapi account has credits/usage available
- Check that your web token is valid in the Vapi dashboard

## Configuration

The assistant configuration is in `constants/index.ts`. You can customize:
- First message
- Voice settings
- Transcription settings
- AI model and prompts

## Support

For more help, visit:
- [Vapi Documentation](https://docs.vapi.ai)
- [Vapi Dashboard](https://dashboard.vapi.ai)

